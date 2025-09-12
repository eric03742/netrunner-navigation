import styles from './style.less';
import { useState } from 'react';
import environmentImg from '@/assets/Environment/environmentImg.png'

const ENVIRONMENT = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'banlist', 'cycle'
  const [transitionClass, setTransitionClass] = useState(''); // 控制过渡动画类

  const showBanlist = () => {
    setTransitionClass(styles.slideOutToRight);
    setTimeout(() => {
      setCurrentView('banlist');
      setTransitionClass('');
    }, 150);
  };

  const showCycle = () => {
    setTransitionClass(styles.slideOutToLeft);
    setTimeout(() => {
      setCurrentView('cycle');
      setTransitionClass('');
    }, 150);
  };

  const showMainFromBanlist = () => {
    setTransitionClass(styles.slideOutToLeft);
    setTimeout(() => {
      setCurrentView('main');
      setTransitionClass('');
    }, 150);
  };

  const showMainFromCycle = () => {
    setTransitionClass(styles.slideOutToRight);
    setTimeout(() => {
      setCurrentView('main');
      setTransitionClass('');
    }, 150);
  };

  return (
    <div className={styles.container}>
      {/* 主页面内容 */}
      <div
        className={`${styles.page} ${styles.mainPage} ${currentView === 'main'
          ? (transitionClass ? `${transitionClass}` : `${styles.active}`)
          : `${styles.hidden}`
          }`}
      >
        {/* 说明文字区域 */}
        <div className={styles.descriptionSection}>
          <p>作为一款对战卡牌游戏，保证游戏平衡性的重要手段是确保您和您的对手在相同的赛制环境内对战，即使用同样的牌池，以及相同的禁卡表。</p>
          <p>作为一款对战卡牌游戏，保证游戏平衡性的重要手段是确保您和您的对手在相同的赛制环境内对战，即使用同样的牌池，以及相同的禁卡表。</p>
        </div>

        {/* 按钮区域 */}
        <div className={styles.buttonSection}>
          {/* 左侧按钮 - 禁卡区 */}
          <div className={styles.leftButtons}>
            <h3>禁卡区</h3>
            <div className={styles.buttonGrid}>
              <button className={styles.techButton} onClick={showBanlist}>
                标准
              </button>
              <button className={styles.techButton} onClick={showBanlist}>
                核心
              </button>
              <button className={styles.techButton} onClick={showBanlist}>
                新启
              </button>
              <button className={styles.techButton} onClick={showBanlist}>
                永恒
              </button>
            </div>
          </div>

          <img className={styles.middle} src={environmentImg} />

          {/* 右侧按钮 - 循环区 */}
          <div className={styles.rightButtons}>
            <h3>循环区</h3>
            <div className={styles.cycleButtons}>
              <button className={styles.techButton} onClick={showCycle}>
                循环按钮1
              </button>
              <button className={styles.techButton} onClick={showCycle}>
                循环按钮2
              </button>
              <button className={styles.techButton} onClick={showCycle}>
                循环按钮3
              </button>
              <button className={styles.techButton} onClick={showCycle}>
                循环按钮4
              </button>
              <button className={styles.techButton} onClick={showCycle}>
                循环按钮5
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 禁卡区页面 */}
      <div
        className={`${styles.page} ${styles.banlistPage} ${currentView === 'banlist'
          ? (transitionClass ? `${transitionClass}` : `${styles.active}`)
          : (currentView === 'main' ? `${styles.enterFromLeft}` : `${styles.hidden}`)
          }`}
      >
        <div className={styles.pageHeader}>
          <button className={styles.backButton} onClick={showMainFromBanlist}>返回</button>
          <h2>禁卡区内容</h2>
        </div>
        <div className={styles.pageContent}>
          <p>这里是禁卡区的详细内容</p>
        </div>
      </div>

      {/* 循环区页面 */}
      <div
        className={`${styles.page} ${styles.cyclePage} ${currentView === 'cycle'
          ? (transitionClass ? `${transitionClass}` : `${styles.active}`)
          : (currentView === 'main' ? `${styles.enterFromRight}` : `${styles.hidden}`)
          }`}
      >
        <div className={styles.pageHeader}>
          <button className={styles.backButton} onClick={showMainFromCycle}>返回</button>
          <h2>循环区内容</h2>
        </div>
        <div className={styles.pageContent}>
          <p>这里是循环区的详细内容</p>
        </div>
      </div>
    </div>
  );
};

export default ENVIRONMENT;