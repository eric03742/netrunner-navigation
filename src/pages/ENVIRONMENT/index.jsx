import styles from './style.less';
import './index.less';
import { useState } from 'react';
import environmentImg from '@/assets/Environment/environmentImg.webp'
import buyQrcode from '@/assets/Environment/buyQrcode.webp'
import { Image, Modal } from "antd"
import { cycleText, banTextStandard, banTextStarter } from './content'

const ENVIRONMENT = () => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'banlist', 'cycle'
  const [visible, setVisible] = useState(false)
  const [transitionClass, setTransitionClass] = useState(''); // 控制过渡动画类
  const [banList, setBanList] = useState([]); // 禁卡表
  const [cycleData, setCycleData] = useState({}); // 循环信息
  const [currentBan, setCurrentBan] = useState('standard'); // 禁卡表
  const [isFading, setIsFading] = useState(false); // 控制淡入淡出动画

  const showBanlist = (type) => {
    // 根据type设置禁卡表
    if (type === 'standard') {
      setCurrentBan('standard')
      try {
        const images = require.context('@/assets/Environment/standardBanList', false, /\.(webp)$/);
        const imageArray = images.keys().map(image => images(image));
        setBanList(imageArray);
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

  const showCycle = (key) => {
    setCycleData(cycleText?.find(item => item.key === key))
    setTransitionClass(styles.slideOutToLeft);
    setTimeout(() => {
      setCurrentView('cycle');
      setTransitionClass('');
      setIsFading(true);
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
    setIsFading(false);
    setTimeout(() => {
      setTransitionClass(styles.slideOutToRight);
      setTimeout(() => {
        setCurrentView('main');
        setTransitionClass('');
      }, 150);
    }, 300); // 等待淡出动画完成
  };

  return (
    <div className={styles.container}>
      <Modal
        width={500}
        getContainer={() => document.getElementById('root')}
        title={'实体卡购买链接'}
        open={visible}
        wrapClassName="community-modal"
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ width: 400 }} src={buyQrcode} />
        </div>
      </Modal>
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
              <button className={styles.techButton} style={{ background: 'linear-gradient(135deg, #e55cb4, #ffffff00)' }} onClick={() => showBanlist('starter')}>
                查看新启禁卡表
              </button>
              <button className={styles.techButton} style={{ background: 'linear-gradient(135deg, rgb(106,127,243), #ffffff00)' }} onClick={() => setVisible(true)}>
                实体卡购买链接
              </button>
            </div>
          </div>

          <img className={styles.middle} src={environmentImg} />

          {/* 右侧按钮 - 循环区 */}
          <div className={styles.rightButtons} style={{ minWidth: '420px' }}>
            <div className={styles.cycleButtons}>
              {cycleText?.map(item => <button className={styles.cycleButton} style={{ background: `linear-gradient(135deg, ${item.color}, #ffffff00)` }} onClick={() => showCycle(item.key)}>
                <img src={item.logo} className={styles.cycleLogo} />  {item.title}
              </button>)}
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
          {currentBan === 'standard' && <>
            <h2>标准禁卡表25.10</h2>
            <h3>生效日期：2025年10月3日</h3>
          </>}
          {currentBan === 'starter' && <>
            <h2>新启禁卡表25.04</h2>
            <h3>生效日期：2025年4月27日</h3>
          </>}
          {/* 添加右箭头按钮 */}
          <button className={styles.nextButton} onClick={showMainFromBanlist}>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24">
              <path
                d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                strokeWidth="2"
                stroke="#fff"
                fill="none"
              />
            </svg>
          </button>
        </div>
        <div className={styles.banListContent}>
          {/* 左侧禁卡列表文本 */}
          <div className={styles.banListText}>
            {currentBan === 'standard' ? banTextStandard : banTextStarter}
          </div>

          {/* 右侧图片内容 */}
          <div className={styles.banListImages}>
            {banList.map((image) => (
              <Image
                preview={{ getContainer: () => document.getElementById('root') }}
                className={styles.image}
                width={150}
                src={image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 循环区页面 */}
      <div
        className={`${styles.page} ${styles.cyclePage} ${currentView === 'cycle'
          ? (transitionClass ? `${transitionClass}` : `${styles.active}`)
          : (currentView === 'main' ? `${styles.enterFromRight}` : `${styles.hidden}`)
          }`}
      >
        <div className={styles.pageHeader} style={{ paddingBottom: 0 }}>
          {/* 添加左侧返回按钮，箭头向左 */}
          <button className={styles.nextLeftButton} onClick={showMainFromCycle}>
            <svg className={styles.arrowIcon} viewBox="0 0 24 24">
              <path
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                strokeWidth="2"
                stroke="#fff"
                fill="none"
              />
            </svg>
          </button>
          {/* 标题 */}
          <h2 style={{ color: cycleData.color }}>{cycleData?.title}</h2>
        </div>
        <div className={`${styles.cycleContent} ${isFading ? styles.fadeIn : ''}`} style={{ paddingTop: 0 }}>
          {/* logo居中 */}
          {cycleData.logo && <img src={cycleData.logo} className={styles.cycleLogos} />}

          {/* logo可能会出现的副标题 */}
          {cycleData.subTitle && <div className={styles.cycleSubTitle}>{cycleData?.subTitle}</div>}

          {/* logo下方时间 */}
          {cycleData.time && <div className={styles.cycleTime}>{cycleData?.time}</div>}

          {/* logo下方说明文字 */}
          {cycleData.text && <div className={styles.cycleText}>{cycleData?.text}</div>}

          <div className={styles.cycleBottom}>
            {/*该循环的卡牌图片*/}
            {cycleData.cards && <img src={cycleData.cards} className={styles.cycleCards} />}

            {/*卡牌图片下的数量文字*/}
            {cycleData.content && <div className={styles.cycleCardContent}>{cycleData?.content}</div>}

            {/*封面，1~2张*/}
            {cycleData.covers && (
              <div className={styles.cycleCoverContent}>
                {cycleData?.covers?.map((item, index) => (
                  <img key={index} src={item} className={styles.cycleCover} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENVIRONMENT;