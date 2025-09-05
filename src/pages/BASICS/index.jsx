import React, { useState, useEffect, useRef } from 'react';
import { Document } from 'docx';
import Highlighter from 'react-highlight-words';
import './style.less';
import rules from './rules.docx'

// 文档预览组件
const DocPreview = () => {
  // 状态管理
  const [docContent, setDocContent] = useState({ titles: [], sections: [] }); // 标题和内容
  const [searchText, setSearchText] = useState(''); // 搜索文本
  const [activeTitleIndex, setActiveTitleIndex] = useState(0); // 当前激活的标题索引
  const [searchResults, setSearchResults] = useState([]); // 搜索结果
  const [currentResultIndex, setCurrentResultIndex] = useState(-1); // 当前高亮的搜索结果索引
  const sectionRefs = useRef([]); // 内容区域引用，用于锚点跳转

  // 解析DOCX文件内容
  useEffect(() => {
    const fetchAndParseDoc = async () => {
      try {
        // 这里替换为你的DOC文件路径（本地文件需通过input上传，此处模拟远程获取）
        const response = await fetch(rules);
        const arrayBuffer = await response.arrayBuffer();

        // 使用 docx 库解析文件
        const doc = await Document.load(arrayBuffer);
        const paragraphs = doc.body.children.filter(
          (child) => child.type === 'paragraph'
        );

        // 提取标题和内容（基于文档结构识别标题层级）
        const titles = [];
        const sections = [];
        let currentSection = { title: '', content: [] };

        paragraphs.forEach((para) => {
          const text = para.children
            .map((run) => run.text || '')
            .join('')
            .trim();

          if (!text) return;

          // 识别标题（基于文档中的#、##等标记）
          if (text.startsWith('#')) {
            // 保存上一个章节
            if (currentSection.title) {
              sections.push({
                title: currentSection.title,
                content: currentSection.content.join('\n'),
              });
            }

            // 提取标题文本（去除#标记）
            const titleText = text.replace(/#+/g, '').trim();
            const titleLevel = text.match(/#+/)[0].length; // 标题层级
            titles.push({ text: titleText, level: titleLevel });

            // 初始化新章节
            currentSection = { title: titleText, content: [] };
          } else {
            // 普通内容，添加到当前章节
            currentSection.content.push(text);
          }
        });

        // 保存最后一个章节
        if (currentSection.title) {
          sections.push({
            title: currentSection.title,
            content: currentSection.content.join('\n'),
          });
        }
        console.log('setDocContent', titles, sections)
        setDocContent({ titles, sections });
        // 初始化内容区域引用
        sectionRefs.current = sections.map(() => React.createRef());
      } catch (error) {
        console.error('解析DOC文件失败:', error);
      }
    };

    fetchAndParseDoc();
  }, []);

  // 处理标题点击：跳转到对应内容
  const handleTitleClick = (index) => {
    setActiveTitleIndex(index);
    // 滚动到对应内容区域
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // 重置搜索结果索引
    setCurrentResultIndex(-1);
  };

  // 处理搜索文本变化
  useEffect(() => {
    if (!searchText) {
      setSearchResults([]);
      setCurrentResultIndex(-1);
      return;
    }

    // 查找所有包含搜索文本的内容
    const results = [];
    docContent.sections.forEach((section, sectionIndex) => {
      const content = section.content.toLowerCase();
      const searchLower = searchText.toLowerCase();

      if (content.includes(searchLower)) {
        // 找到所有匹配位置
        let startIndex = content.indexOf(searchLower);
        while (startIndex !== -1) {
          results.push({
            sectionIndex,
            start: startIndex,
            end: startIndex + searchText.length,
          });
          startIndex = content.indexOf(searchLower, startIndex + searchText.length);
        }
      }
    });

    setSearchResults(results);
    setCurrentResultIndex(results.length > 0 ? 0 : -1);

    // 跳转到第一个搜索结果
    if (results.length > 0) {
      const firstResult = results[0];
      setActiveTitleIndex(firstResult.sectionIndex);
      if (sectionRefs.current[firstResult.sectionIndex]) {
        sectionRefs.current[firstResult.sectionIndex].current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [searchText, docContent.sections]);

  // 切换搜索结果（上一个/下一个）
  const navigateSearchResult = (direction) => {
    if (searchResults.length === 0) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentResultIndex + 1) % searchResults.length;
    } else {
      newIndex = (currentResultIndex - 1 + searchResults.length) % searchResults.length;
    }

    setCurrentResultIndex(newIndex);
    const targetResult = searchResults[newIndex];
    setActiveTitleIndex(targetResult.sectionIndex);

    // 滚动到对应内容区域
    if (sectionRefs.current[targetResult.sectionIndex]) {
      sectionRefs.current[targetResult.sectionIndex].current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 渲染标题导航（左侧）
  const renderTitleNav = () => {
    return (
      <div className="doc-nav">
        <h3 className="nav-title">文档目录</h3>
        <ul className="title-list">
          {docContent.titles.map((title, index) => (
            <li
              key={index}
              className={`title-item level-${title.level} ${activeTitleIndex === index ? 'active' : ''
                }`}
              onClick={() => handleTitleClick(index)}
            >
              {title.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // 渲染文档内容（右侧）
  const renderDocContent = () => {
    if (docContent.sections.length === 0) {
      return <div className="loading">加载文档中...</div>;
    }

    return (
      <div className="doc-content">
        {docContent.sections.map((section, sectionIndex) => {
          // 检查当前章节是否有搜索结果
          const sectionResults = searchResults.filter(
            (res) => res.sectionIndex === sectionIndex
          );
          // 当前章节是否有激活的搜索结果
          const hasActiveResult = sectionResults.some(
            (res, resIndex) =>
              searchResults.findIndex(r => r === res) === currentResultIndex
          );

          return (
            <div
              key={sectionIndex}
              ref={sectionRefs.current[sectionIndex]}
              className={`content-section ${activeTitleIndex === sectionIndex ? 'active-section' : ''
                } ${hasActiveResult ? 'highlight-section' : ''}`}
            >
              <h2 className="section-title">{section.title}</h2>
              <div className="section-body">
                {/* 搜索高亮渲染 */}
                <Highlighter
                  highlightClassName={
                    currentResultIndex >= 0
                      ? 'search-highlight active-highlight'
                      : 'search-highlight'
                  }
                  searchWords={[searchText]}
                  autoEscape={true}
                  textToHighlight={section.content}
                  // 自定义高亮逻辑：只高亮当前激活的搜索结果
                  highlightTag={(props) => {
                    if (!searchText) return <span {...props} />;

                    // 检查当前高亮位置是否为激活的搜索结果
                    const textLower = section.content.toLowerCase();
                    const searchLower = searchText.toLowerCase();
                    const startIndex = textLower.indexOf(searchLower, props.startIndex);

                    if (startIndex === -1) return <span {...props} />;

                    const resultIndex = searchResults.findIndex(
                      (res) =>
                        res.sectionIndex === sectionIndex &&
                        res.start === startIndex
                    );

                    const isActive = resultIndex === currentResultIndex;
                    return (
                      <span
                        {...props}
                        className={`search-highlight ${isActive ? 'active-highlight' : ''}`}
                      />
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="doc-preview-container">
      {/* 搜索栏 */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="搜索文档内容..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        {searchResults.length > 0 && (
          <div className="search-controls">
            <button
              className="search-btn"
              onClick={() => navigateSearchResult('prev')}
              disabled={searchResults.length === 0}
            >
              ← 上一个
            </button>
            <span className="search-count">
              {currentResultIndex + 1}/{searchResults.length}
            </span>
            <button
              className="search-btn"
              onClick={() => navigateSearchResult('next')}
              disabled={searchResults.length === 0}
            >
              下一个 →
            </button>
          </div>
        )}
      </div>

      {/* 文档主体（左侧导航 + 右侧内容） */}
      <div className="doc-main">
        {/* 左侧标题导航 */}
        {renderTitleNav()}

        {/* 右侧文档内容 */}
        <div className="content-wrapper">
          {renderDocContent()}
        </div>
      </div>
    </div>
  );
};

export default DocPreview;