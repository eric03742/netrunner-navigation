import styles from './style.less';
import { useState } from 'react';
import environmentImg from '@/assets/Environment/environmentImg.png'
import { Image } from "antd"

const ENVIRONMENT = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'banlist', 'cycle'
  const [transitionClass, setTransitionClass] = useState(''); // 控制过渡动画类
  const [banList, setBanList] = useState([]); // 禁卡表
  const [currentBan, setCurrentBan] = useState('stardard'); // 禁卡表
  const showBanlist = (type) => {
    // 根据type设置禁卡表
    if (type === 'standard') {
      setCurrentBan('standard')
      try {
        const images = require.context('@/assets/Environment/standardBanList', false, /\.(webp)$/);
        const imageArray = images.keys().map(image => images(image));
        setBanList(imageArray);
        console.log('images', images)
        console.log('imageArray', imageArray)
      } catch (error) {
        console.error('Failed to import ban list images:', error);
      }
    } else {
      setCurrentBan('starter')
      try {
        const images = require.context('@/assets/Environment/starterBanList', false, /\.(webp)$/);
        const imageArray = images.keys().map(image => images(image));
        setBanList(imageArray);
      } catch (error) {
        console.error('Failed to import ban list images:', error);
      }
    }
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
          <p>作为一款对战卡牌游戏，保证游戏平衡性的重要手段是确保您和您的对手在<span style={{ fontWeight: 800, color: '#e11919' }}>相同的赛制环境</span>内对战，即使用同样的牌池，以及相同的<span style={{ fontWeight: 800, color: '#000' }}>禁卡表</span>。</p>
          <p>您可以和你的小伙伴自定义环境，但我们建议采用主流环境进行游戏，这样可以让您更方便地参与到更多玩家的讨论中。主流环境包括4种，其中90%以上的玩家使用的是<span style={{ fontWeight: 800, color: '#4ceb27' }}>标准（Standard）环境</span>，其他玩家则可能使用<span style={{ fontWeight: 800, color: '#79d6f3' }}>核心（Core Set）</span>、<span style={{ fontWeight: 800, color: '#e55cb4' }}>新启（Startup）</span>、<span style={{ fontWeight: 800, color: 'gray' }}>永恒（Eternal）</span>这3种。</p>
        </div>

        {/* 按钮区域 */}
        <div className={styles.buttonSection}>
          {/* 左侧按钮 - 禁卡区 */}
          <div className={styles.leftButtons}>
            <div className={styles.buttonGrid}>
              <button className={styles.techButton} style={{ background: 'linear-gradient(135deg, rgb(76, 235, 39), #ffffff00)' }} onClick={() => showBanlist('standard')}>
                查看标准禁卡表
              </button>
              <button className={styles.techButton} style={{ background: 'linear-gradient(135deg, #e55cb4, #ffffff00)' }} onClick={() => showBanlist('start')}>新启（Startup）
                查看新启禁卡表
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
          {currentBan === 'standard' && <>
            <h2>标准禁卡表25.08</h2>
            <h2>生效日期：2025年8月1日</h2>
          </>}
          {currentBan === 'starter' && <>
            <h2>新启禁卡表25.04</h2>
            <h2>生效日期：2025年4月27日</h2>
          </>}
        </div>
        <div className={styles.banListContent}>
          {banList.map((image) => (
            <Image
              className={styles.image}
              width={150}
              src={image}
            />

          ))}
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