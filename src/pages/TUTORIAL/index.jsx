// src/pages/TUTORIAL/index.jsx
import { useState, useEffect } from 'react';
import styles from './style.less';
import * as mammoth from 'mammoth';
import cropDeck from './cropDeck.docx';
import runnerDeck from './runnerDeck.docx';
import how from './how.docx';
import script from './script.docx';
import { formatContent } from './utils';

const fetchAndParseDoc = async (file) => {
  try {
    // 获取文件
    const response = await fetch(file);
    const arrayBuffer = await response.arrayBuffer();

    // 使用 mammoth 转换为 HTML 以保留样式
    const result = await mammoth.convertToHtml({ arrayBuffer });
    const htmlContent = result.value;

    // 创建一个临时的 div 来解析 HTML 内容
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // 提取标题和内容
    const titles = [];
    const sections = [];
    let currentSection = null;

    // 遍历所有节点
    doc.body.childNodes.forEach((node, index) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // 检查是否为标题元素
        if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.tagName)) {
          // 保存上一个章节
          if (currentSection) {
            sections.push(currentSection);
          }

          const titleText = node.textContent;
          const titleLevel = parseInt(node.tagName[1]);

          titles.push({ text: titleText, level: titleLevel });

          // 初始化新章节
          currentSection = {
            title: titleText,
            level: titleLevel,
            content: ''
          };
        } else {
          // 普通内容，添加到当前章节
          if (currentSection) {
            // 处理内容：删除&nbsp;并替换{credit}为图标
            let content = node.outerHTML || node.textContent;
            content = formatContent(content);
            currentSection.content += content;
          } else {
            // 如果还没有标题，创建一个默认章节
            if (sections.length === 0) {
              currentSection = {
                title: '文档开始',
                level: 1,
                content: ''
              };
              titles.push({ text: '文档开始', level: 1 });
            }
            // 处理内容：删除&nbsp;并替换{credit}为图标
            let content = node.outerHTML || node.textContent;
            content = formatContent(content);
            currentSection.content += content;
          }
        }
      }
    });

    // 保存最后一个章节
    if (currentSection) {
      sections.push(currentSection);
    }
    return sections?.[0]?.content
  } catch (error) {
    console.error('解析DOC文件失败:', error);
  }
};

const MatrixRaidPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const tabs = [
    {
      title: '使用教学牌组教学矩阵潜袭',
      file: how
    },
    {
      title: '教学牌组剧本',
      file: script
    },
    {
      title: '教学牌组：公司',
      file: cropDeck
    },
    {
      title: '教学牌组：潜袭者',
      file: runnerDeck
    }
  ];

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const parsedContent = await fetchAndParseDoc(tabs[activeTab].file);
        setContent(parsedContent);
      } catch (error) {
        console.error('Failed to load content:', error);
        setContent('内容加载失败');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [activeTab]);

  return (
    <div className={styles.docPreviewContainer}>
      <div className={styles.header}>
        <h1>《矩阵潜袭》教学剧本</h1>
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className={styles.contentWrapper}>
        {loading ? (
          <div className={styles.loading}>加载中...</div>
        ) : (
          <div
            className={styles.docContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
};

export default MatrixRaidPage;