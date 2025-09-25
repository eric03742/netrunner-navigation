import { useState, useEffect } from 'react';

export default () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // 判断是否为小屏幕的函数
    const checkScreenSize = () => {
      // 通常将768px作为移动端和桌面端的分界点
      setIsSmallScreen(window.innerWidth < 768);
    };

    // 初始化检查
    checkScreenSize();

    // 添加窗口大小变化的监听器
    window.addEventListener('resize', checkScreenSize);

    // 清理函数，组件卸载时移除监听器
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return {
    isSmallScreen,
  };
};