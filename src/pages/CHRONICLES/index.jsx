import React, { useState, useEffect, useRef } from 'react';
import { useModel } from 'umi';
import content, { meta, headings } from './content';
import './style.less';

const Chronicles = () => {
  const { isSmallScreen } = useModel('mobile');
  const { isPure } = useModel('isPure');
  const [navCollapsed, setNavCollapsed] = useState(false);

  // 移动端默认折叠目录
  useEffect(() => {
    setNavCollapsed(isSmallScreen);
  }, [isSmallScreen]);

  // 锚点跳转：用 id + scrollIntoView
  const handleHeadingClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (isSmallScreen) setNavCollapsed(true);
    }
  };

  // 用 antd Image 包装图片：把 dangerouslySetInnerHTML 里的 <img> 升级为可预览
  // 策略：渲染 HTML 后用 useEffect + DOM 操作替换 img 为可预览 Image 组件
  const articleRef = useRef(null);
  useEffect(() => {
    if (!articleRef.current) return;
    const imgs = articleRef.current.querySelectorAll('img');
    imgs.forEach((img) => {
      if (img.dataset.chroniclesWrapped) return;
      img.dataset.chroniclesWrapped = '1';
      img.classList.add('chronicles-img');
      img.loading = 'lazy';
    });
  }, []);

  return (
    <div className={`chronicles-container ${isPure ? 'chronicles-pure' : ''} ${isSmallScreen ? 'chronicles-mobile' : ''}`}>
      {/* 移动端悬浮目录按钮 */}
      {isSmallScreen && (
        <button className="chronicles-nav-fab" onClick={() => setNavCollapsed(false)}>
          目录
        </button>
      )}
      {/* 移动端目录弹窗 */}
      {isSmallScreen && !navCollapsed && (
        <div className="chronicles-nav-overlay" onClick={() => setNavCollapsed(true)}>
          <div className="chronicles-nav-popup" onClick={(e) => e.stopPropagation()}>
            <div className="chronicles-nav-popup-header">
              <span>目录</span>
              <button className="chronicles-nav-popup-close" onClick={() => setNavCollapsed(true)}>✕</button>
            </div>
            <ul className="chronicles-nav-popup-list">
              {headings.map((h, idx) => (
                <li
                  key={h.id}
                  className={`chronicles-nav-item level-${h.level}`}
                  onClick={() => { handleHeadingClick(h.id); setNavCollapsed(true); }}
                >
                  {h.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* PC 端侧边栏目录 */}
      {!isSmallScreen && (
        <aside className="chronicles-nav">
          <div className="chronicles-nav-inner">
            <div className="chronicles-nav-header">
              <span>目录</span>
            </div>
            <ul className="chronicles-nav-list">
              {headings.map((h, idx) => (
                <li
                  key={h.id}
                  className={`chronicles-nav-item level-${h.level}`}
                  onClick={() => handleHeadingClick(h.id)}
                >
                  {h.text}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}

      {/* 主文章区 */}
      <main className="chronicles-main">
        {/* 文章头 */}
        <header className="chronicles-header">
          <h1 className="chronicles-title">{meta.title}</h1>
          <div className="chronicles-meta">
            <span className="chronicles-author">作者：Empty World</span>
            <span className="chronicles-date">
              发布时间：{meta.publishedAt.replace(/\s*\+08:00$/, '')}
            </span>
          </div>
        </header>

        {/* 正文 HTML */}
        <article
          ref={articleRef}
          className="chronicles-article"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />

        <footer className="chronicles-footer">
          <hr />
          <p>本文为我原创，未经授权禁止转载</p>
        </footer>
      </main>
    </div>
  );
};

export default Chronicles;
