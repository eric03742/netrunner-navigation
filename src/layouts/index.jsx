// src/layouts/index.jsx
import { Tabs, Dropdown } from 'antd';
import { useState, useEffect } from 'react';
import { Outlet, history, useLocation, useModel } from 'umi';
import logo from '@/assets/layout/logo.webp';
import logo2 from '@/assets/layout/logo2.webp';
import CommunityBG from '@/assets/layout/bgs/Community-BG.webp';
import EnvironmentBG from '@/assets/layout/bgs/Environment-BG.webp';
import FactionBG from '@/assets/layout/bgs/Faction-BG.webp';
import BasicBG from '@/assets/layout/bgs/Basics-BG.webp';
import IndexBG from '@/assets/layout/bgs/Index-BG.webp';
import RunBG from '@/assets/layout/bgs/Run-BG.webp';
import beian from '@/assets/layout/beian.webp'
import './style.less';

const TAB = [
  { key: '1', label: '首页', subTitle: 'INDEX', background: IndexBG },
  { key: '2', label: '派系', subTitle: 'FACTION', background: FactionBG },
  { key: '3', label: '基础', subTitle: 'BASICS', background: BasicBG },
  { key: '4', label: '潜袭', subTitle: 'RUN', background: EnvironmentBG },
  { key: '5', label: '环境', subTitle: 'ENVIRONMENT', background: RunBG },
  { key: '6', label: '社群', subTitle: 'COMMUNITY', background: CommunityBG },

  { key: '7', label: '新手指南', subTitle: 'BEGINNER', background: FactionBG, hidden: true },
  { key: '8', label: '教学剧本', subTitle: 'TUTORIAL', background: FactionBG, hidden: true },
  { key: '9', label: '时序图', subTitle: 'TIME', background: FactionBG, hidden: true },
];

const runSubMenuItems = [
  { key: 'pve', label: '人机对战' },
  { key: 'beginner', label: '新手指南' },
  { key: 'tutorial', label: '教学剧本' },
  { key: 'time', label: '时序图' },
  { key: 'deck', label: '新手预组' },
];

const Layout = () => {
  const { hash } = useLocation();
  const [activeKey, setActiveKey] = useState('INDEX');
  const [prevKey, setPrevKey] = useState('INDEX');
  const [direction, setDirection] = useState(''); // 'left' or 'right'
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0); // 添加触摸起始位置状态
  const { isSmallScreen } = useModel('mobile');

  useEffect(() => {
    // 预加载所有背景图片
    TAB.forEach(item => {
      const img = new Image();
      img.src = item.background;
    });
  }, []);

  // 处理触摸开始事件
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // 处理触摸结束事件
  const handleTouchEnd = (e) => {
    if (!touchStartX) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    // 判断滑动距离是否足够触发切换
    if (Math.abs(diffX) > 50) {
      // 获取可见的tab项（不包括隐藏的）
      const visibleTabs = TAB.filter(item => !item.hidden);
      // 找到当前激活的tab索引
      const currentIndex = visibleTabs.findIndex(item => item.subTitle === activeKey);

      if (diffX > 0) {
        // 向左滑动，切换到下一个tab（如果存在）
        if (currentIndex < visibleTabs.length - 1) {
          handleTabChange(visibleTabs[currentIndex + 1].subTitle);
        }
      } else {
        // 向右滑动，切换到上一个tab（如果存在）
        if (currentIndex > 0) {
          handleTabChange(visibleTabs[currentIndex - 1].subTitle);
        }
      }
    }

    setTouchStartX(0);
  };

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

  const handleRunSubMenuClick = ({ key }) => {
    setTimeout(() => {
      // 根据点击的子菜单项跳转到相应页面
      switch (key) {
        case 'pve':
          window.open('https://tutorial.sneakdoorbeta.net/', '_blank')
          break;
        case 'beginner':
          history.push(`/#BEGINNER`);
          break;
        case 'tutorial':
          history.push('/#TUTORIAL');
          break;
        case 'time':
          history.push('/#TIME');
          break;
        case 'deck':
          history.push('/#DECK');
          break;
        default:
          history.push('/#BEGINNER');
      }
    }, 0)
  };

  useEffect(() => {
    const newKey = hash.startsWith('#') ? hash.substring(1).split('/')[0] : 'INDEX'
    if (['BEGINNER', 'TUTORIAL', 'TIME', 'DECK']?.includes(newKey)) {
      setActiveKey('BASICS');
    } else {
      setActiveKey(newKey);
    }
    if (TAB.find(item => item.subTitle === newKey)?.label) {
      document.title = newKey === 'INDEX' ? '测试暗门' : `测试暗门-${TAB.find(item => item.subTitle === newKey)?.label}`;
    }
  }, [hash])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const renderTabLabel = (item) => {
    if (item.subTitle === 'BASICS' && !isSmallScreen) {
      // 为RUN标签添加下拉菜单
      return (
        <Dropdown
          overlayClassName='layout-dropdown'
          menu={{
            items: runSubMenuItems,
            onClick: handleRunSubMenuClick,
          }}
          trigger={['hover']}
        >
          <div>
            <div className="layout-tab-title">{item.label}</div>
            <div className="layout-tab-title">{item.subTitle}</div>
          </div>
        </Dropdown>
      );
    }

    return (
      <div>
        <div className="layout-tab-title" onClick={() => isSmallScreen && item.subTitle === 'BASICS' && history.push('/#BASICS')}>{item.label}</div>
        {!isSmallScreen && <div className="layout-tab-title">{item.subTitle}</div>}
      </div>
    );
  };

  return (
    <div className="layout">
      <div className="layout-header">
        <img src={logo} className="logo-img" />
        <Tabs
          className='layout-tab'
          activeKey={activeKey}
          onChange={handleTabChange}
          items={TAB?.filter(item => !item.hidden)?.map((item) => ({
            key: item.subTitle,
            label: renderTabLabel(item),
          }))}
        />
      </div>
      <div
        className={isSmallScreen ? activeKey === 'INDEX' ? "layout-contain-Index" : "layout-contain-mobile" : "layout-contain"}
        onTouchStart={isSmallScreen ? handleTouchStart : undefined}
        onTouchEnd={isSmallScreen ? handleTouchEnd : undefined}
      >
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
        <div className="layout-text">
          <div className="layout-beian">
            <a href=" " target="_blank" style={{ paddingRight: 20 }}>闽ICP备2025085053号-1</a>
            <div className="layout-beian-row">
              <img className="layout-beian-img" src={beian} />
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=35060202000609" rel="noreferrer" target="_blank"><img /> 闽公网安备35060202000609号</a>
            </div>
          </div>
          <div className="layout-developer">
            网站主理人&首席设计师：风筝
          </div>
          <div className="layout-developer">
            开发者：皮皮-矩阵潜袭中国测试暗门委员会
          </div>
          <div className="layout-version">
            当前版本：1.0.0 更新时间：2025/09/26
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;