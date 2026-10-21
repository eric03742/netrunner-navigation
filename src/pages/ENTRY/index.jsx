import { useRef, useEffect } from 'react';
import { useModel } from 'umi';
import './style.less';

// 潜袭入门：直接嵌入原单文件 HTML（矩阵潜袭入门.html），
// 用 iframe 承载，保留原版全部交互（牌桌渲染、课程、测验）。
// 原文件已复制到 public/entry-tutorial.html。
const Entry = () => {
  const iframeRef = useRef(null);
  const { isSmallScreen } = useModel('mobile');

  // 适配父容器高度：iframe 撑满。
  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    el.focus();
  }, []);

  return (
    <div className="entry-wrap">
      <iframe
        ref={iframeRef}
        className="entry-iframe"
        src="/entry-tutorial.html"
        title="矩阵潜袭入门与决策训练"
        loading="eager"
        allow="fullscreen"
        frameBorder="0"
        scrolling={isSmallScreen ? 'auto' : 'no'}
      />
    </div>
  );
};

export default Entry;
