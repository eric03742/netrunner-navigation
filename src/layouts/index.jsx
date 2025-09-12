// src/layouts/index.jsx
import { Tabs } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { Outlet, history, useLocation } from 'umi';
import logo from '@/assets/layout/logo.png';
import logo2 from '@/assets/layout/logo2.png';
import BasicsBg from '@/assets/layout/bgs/Basics-BG.png';
import CommunityBG from '@/assets/layout/bgs/Community-BG.jpg';
import EnvironmentBG from '@/assets/layout/bgs/Environment-BG.png';
import FactionBG from '@/assets/layout/bgs/Faction-BG.jpg';
import IndexBG from '@/assets/layout/bgs/Index-BG.jpg';
import RunBG from '@/assets/layout/bgs/Run-BG.jpg';
import beian from '@/assets/layout/beian.png'
import './style.less';

const TAB = [
  { key: '1', label: '首页', subTitle: 'INDEX', background: IndexBG },
  { key: '2', label: '派系', subTitle: 'FACTION', background: FactionBG },
  { key: '3', label: '基础', subTitle: 'BASICS', background: null },
  { key: '4', label: '潜袭', subTitle: 'RUN', background: RunBG },
  { key: '5', label: '环境', subTitle: 'ENVIRONMENT', background: EnvironmentBG },
  { key: '6', label: '社群', subTitle: 'COMMUNITY', background: CommunityBG },
];

const Layout = () => {
  const { hash } = useLocation();
  const [activeKey, setActiveKey] = useState('INDEX');
  const [prevKey, setPrevKey] = useState('INDEX');
  const [direction, setDirection] = useState(''); // 'left' or 'right'
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 预加载所有背景图片
    TAB.forEach(item => {
      const img = new Image();
      img.src = item.background;
    });
  }, []);

  const handleTabChange = (key) => {
    const currentIndex = TAB.findIndex((item) => item.subTitle === activeKey);
    const nextIndex = TAB.findIndex((item) => item.subTitle === key);
    setPrevKey(activeKey);
    // Determine direction
    if (nextIndex > currentIndex) {
      setDirection('right');
    } else {
      setDirection('left');
    }
    setIsAnimating(true);
    // 使用 Umi 的 history API 更新 URL
    history.push(`/#${key}`);
  };

  useEffect(() => {
    const newKey = hash.startsWith('#') ? hash.substring(1) : 'INDEX'
    setActiveKey(newKey);
    document.title = newKey === 'INDEX' ? '测试暗门' : `测试暗门-${TAB.find(item => item.subTitle === newKey).label}`;
  }, [hash])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // 添加滚轮切换 tab 的功能
  const handleWheel = useCallback((e) => {
    if (activeKey === 'BASICS') {
      return;
    }
    // 阻止默认滚动行为
    e.preventDefault();

    // 防止在动画过程中切换
    if (isAnimating) return;

    const currentIndex = TAB.findIndex((item) => item.subTitle === activeKey);

    // 根据滚轮方向确定下一个 tab
    let nextIndex;
    if (e.deltaY > 0) {
      // 向下滚动，切换到下一个 tab
      nextIndex = (currentIndex + 1) % TAB.length;
      setDirection('right');
    } else {
      // 向上滚动，切换到上一个 tab
      nextIndex = (currentIndex - 1 + TAB.length) % TAB.length;
      setDirection('left');
    }

    setPrevKey(activeKey);
    setIsAnimating(true);

    // 更新 URL 和 activeKey
    const nextTab = TAB[nextIndex];
    history.push(`/#${nextTab.subTitle}`);
  }, [activeKey, isAnimating]);

  // 添加和移除滚轮事件监听器
  useEffect(() => {
    const layoutElement = document.querySelector('.layout-contain');
    if (layoutElement) {
      layoutElement.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        layoutElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleWheel]);

  return (
    <div className="layout">
      <div className="layout-header">
        <img src={logo} className="logo-img" />
        <Tabs
          activeKey={activeKey}
          onChange={handleTabChange}
          items={TAB.map((item) => ({
            key: item.subTitle,
            label: (
              <div>
                <div className="layout-tab-title">{item.label}</div>
                <div className="layout-tab-title">{item.subTitle}</div>
              </div>
            ),
          }))}
        />
      </div>
      <div className="layout-contain">
        {/* Background container with animation */}
        <div className="layout-bg">
          {/* Previous background (fading out) */}
          <div
            className={`bg-slide bg-slide-prev ${isAnimating ? 'fade-out' : ''}`}
            style={{
              backgroundImage: `url(${TAB.find((item) => item.subTitle === prevKey)?.background})`,
            }}
          />
          {/* Current background (sliding in) */}
          <div
            className={`bg-slide bg-slide-current ${isAnimating ? `slide-in-${direction}` : ''}`}
            style={{
              backgroundImage: `url(${TAB.find((item) => item.subTitle === activeKey)?.background})`,
              filter: activeKey === 'INDEX' ? 'none' : 'blur(5px)'
            }}
          />
        </div>
        <div className="layout-inner">
          <Outlet />
        </div>
      </div>
      <div className="layout-footer">
        <img className="layout-footer-logo" src={logo2} />
        <div className="layout-beian">
          <a href=" " target="_blank" style={{ paddingRight: 20 }}>闽ICP备2025085053号-1</a>
          <div className="layout-beian-row">
            <img className="layout-beian-img" src={beian} />
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=35060202000609" rel="noreferrer" target="_blank"><img /> 闽公网安备35060202000609号</a>
          </div>
        </div>
        <div className="layout-developer">
          开发者：矩阵潜袭中国-测试暗门委员会
        </div>
        <div className="layout-version">
          当前版本：0.0.1 更新时间：2025/08/28
        </div>
      </div>
    </div>
  );
};

export default Layout;