import React, { useState, useEffect, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import Spin from '@/component/spin'
import './style.less';
import { titles, sections } from './const'

// import * as mammoth from 'mammoth';
// import rules from './rules.docx'
// import { formatContent } from './utils';

// 文档预览组件
const DocPreview = () => {
  // 状态管理
  const [docContent, setDocContent] = useState({ titles: [], sections: [] }); // 标题和内容
  const [searchText, setSearchText] = useState(''); // 搜索文本
  const [loading, setLoading] = useState(false); // 加载中
  const [activeTitleIndex, setActiveTitleIndex] = useState(0); // 当前激活的标题索引
  const [searchResults, setSearchResults] = useState([]); // 搜索结果
  const [currentResultIndex, setCurrentResultIndex] = useState(-1); // 当前高亮的搜索结果索引
  const sectionRefs = useRef([]); // 内容区域引用，用于锚点跳转

  // 解析DOCX文件内容
  useEffect(() => {
    setLoading(true)
    const fetchAndParseDoc = async () => {
      try {
        setDocContent({ titles, sections });
        // 初始化内容区域引用
        sectionRefs.current = sections.map(() => React.createRef());
      } catch (error) {
        console.error('解析DOC文件失败:', error);
      } finally {
        // 无论是否出错都会执行
        setLoading(false)
      }
    };

    fetchAndParseDoc();
  }, []);

  // 处理标题点击：跳转到对应内容
  const handleTitleClick = (index) => {
    setActiveTitleIndex(index);
    // 滚动到对应内容区域，但只在内容区域内滚动
    const contentWrapper = document.querySelector('.content-wrapper');
    const targetSection = sectionRefs.current[index]?.current;

    if (contentWrapper && targetSection) {
      // 计算目标章节相对于内容包装器的偏移量
      const wrapperRect = contentWrapper.getBoundingClientRect();
      const sectionRect = targetSection.getBoundingClientRect();
      const offsetTop = sectionRect.top - wrapperRect.top + contentWrapper.scrollTop;

      contentWrapper.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
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

      // 滚动到第一个搜索结果，使用与handleTitleClick一致的逻辑
      const contentWrapper = document.querySelector('.content-wrapper');
      const targetSection = sectionRefs.current[firstResult.sectionIndex]?.current;

      if (contentWrapper && targetSection) {
        // 计算目标章节相对于内容包装器的偏移量
        const wrapperRect = contentWrapper.getBoundingClientRect();
        const sectionRect = targetSection.getBoundingClientRect();
        const offsetTop = sectionRect.top - wrapperRect.top + contentWrapper.scrollTop;

        contentWrapper.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
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

    // 滚动到对应内容区域，使用与handleTitleClick一致的逻辑
    const contentWrapper = document.querySelector('.content-wrapper');
    const targetSection = sectionRefs.current[targetResult.sectionIndex]?.current;

    if (contentWrapper && targetSection) {
      // 计算目标章节相对于内容包装器的偏移量
      const wrapperRect = contentWrapper.getBoundingClientRect();
      const sectionRect = targetSection.getBoundingClientRect();
      const offsetTop = sectionRect.top - wrapperRect.top + contentWrapper.scrollTop;

      contentWrapper.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
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
                {/* 渲染带样式的 HTML 内容 */}
                {searchText ? (
                  // 如果有搜索文本，使用 Highlighter 组件
                  <Highlighter
                    highlightClassName={
                      currentResultIndex >= 0
                        ? 'search-highlight active-highlight'
                        : 'search-highlight'
                    }
                    searchWords={[searchText]}
                    autoEscape={true}
                    textToHighlight={section.content.replace(/<[^>]*>/g, '')} // 去除 HTML 标签进行搜索
                  />
                ) : (
                  // 否则直接渲染 HTML 内容
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
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
      {(loading || docContent.sections.length === 0) && <Spin />}
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