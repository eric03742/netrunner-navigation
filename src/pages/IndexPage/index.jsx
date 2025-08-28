import styles from './style.less';
import { useState, useEffect, useCallback } from 'react';
import { history, useLocation } from 'umi';
import netRunner from '@/assets/netRunner.png'

const IndexPage = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // 添加滚动状态
  const totalPages = 5;

  // 节流控制函数
  const handleScroll = useCallback((direction) => {
    // 如果正在滚动中，则不处理新的滚动事件
    if (isScrolling) return;

    setIsScrolling(true);

    if (direction === 'down') {
      setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
    } else if (direction === 'up') {
      if (currentPage === 0) {
        // 如果在第一页向上滚动，允许页面整体滚动
        setIsScrolling(false);
        return;
      }
      setCurrentPage(prev => Math.max(prev - 1, 0));
    }

    // 设置延迟，控制滚动间隔（500ms）
    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  }, [isScrolling, totalPages]);

  // 处理鼠标滚轮事件
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      // 向下滚动
      handleScroll('down');
    } else {
      // 向上滚动
      handleScroll('up');
    }
  }, [handleScroll]);

  // 添加键盘支持（可选）
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      handleScroll('down');
    } else if (e.key === 'ArrowUp') {
      handleScroll('up');
    }
  }, [handleScroll]);

  useEffect(() => {
    // 添加事件监听器
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // 清理事件监听器
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  return (
    <div className={styles.IndexPage}>
      {/* 页面指示器 */}
      <div className={styles.indicators}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === currentPage ? styles.active : ''}`}
            onClick={() => !isScrolling && setCurrentPage(index)} // 点击时也检查是否正在滚动
          />
        ))}
      </div>

      {/* 页面内容容器 */}
      <div className={styles.pageContainer}>
        {/* 原始欢迎页面 */}
        <div
          className={`${styles.page} ${styles.welcomePage} ${currentPage === 0 ? styles.active : ''}`}
        >
          <div className={styles['welcome-content']}>
            <img className={styles['welcome-logo']} src={netRunner} />
            <div className={styles['welcome-text-top']}><span style={{ color: '#444242' }}>欢迎</span>来到</div>
            <div className={styles['welcome-text-bottom']}>矩阵潜袭的<span style={{ color: '#cacacaff' }}>世界</span></div>
          </div>
        </div>

        {/* 四个新增页面 */}
        <div
          className={`${styles.page} ${currentPage === 1 ? styles.active : ''}`}
        >
          <div className={styles.textContent}>
            <h2>第一段文字</h2>
            <p>这是第一段介绍文字内容，你可以在这里添加任何你想要展示的信息。</p>
          </div>
        </div>

        <div
          className={`${styles.page} ${currentPage === 2 ? styles.active : ''}`}
        >
          <div className={styles.textContent}>
            <h2>第二段文字</h2>
            <p>这是第二段介绍文字内容，继续扩展你的故事或信息。</p>
          </div>
        </div>

        <div
          className={`${styles.page} ${currentPage === 3 ? styles.active : ''}`}
        >
          <div className={styles.textContent}>
            <h2>第三段文字</h2>
            <p>这是第三段介绍文字内容，深入描述你的主题或概念。</p>
          </div>
        </div>

        <div
          className={`${styles.page} ${currentPage === 4 ? styles.active : ''}`}
        >
          <div className={styles.textContent}>
            <h2>第四段文字</h2>
            <p>这是第四段介绍文字内容，作为结尾或总结部分。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;