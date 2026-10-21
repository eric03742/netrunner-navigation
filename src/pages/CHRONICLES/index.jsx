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
    });
  }, []);

  return (
    <div className={`chronicles-container ${isPure ? 'chronicles-pure' : ''} ${isSmallScreen ? 'chronicles-mobile' : ''}`}>
      {/* 左侧 sticky 目录 */}
      <aside className={`chronicles-nav ${navCollapsed ? 'collapsed' : ''}`}>
        <div className="chronicles-nav-inner">
          <div className="chronicles-nav-header">
            <span>目录</span>
            <button
              className="chronicles-nav-toggle"
              onClick={() => setNavCollapsed(!navCollapsed)}
              aria-label="toggle nav"
            >
              {navCollapsed ? '▶' : '◀'}
            </button>
          </div>
          {!navCollapsed && (
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
          )}
        </div>
        {navCollapsed && (
          <button
            className="chronicles-nav-expand"
            onClick={() => setNavCollapsed(false)}
            aria-label="expand nav"
          >
            ▶
          </button>
        )}
      </aside>

      {/* 主文章区 */}
      <main className="chronicles-main">
        {/* 文章头 */}
        <header className="chronicles-header">
          <h1 className="chronicles-title">{meta.title}</h1>
          <div className="chronicles-meta">
            <span className="chronicles-author">作者：EW</span>
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
