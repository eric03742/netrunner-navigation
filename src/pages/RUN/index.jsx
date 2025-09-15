// src/pages/RUN/index.jsx
import styles from './style.less';
import { useState, useEffect } from 'react';

// 图片导入（需要您提供这些图片文件）
import buildImg from '@/assets/Run/build.webp';
import cardListImg from '@/assets/Run/cardList.webp';
import gameImg from '@/assets/Run/game.webp';
import statistics from '@/assets/Run/statistics.webp';


const slides = [
  {
    image: gameImg,
    title: "随时随地在线游玩",
    description: "和国内所有的潜袭者们一起实时竞技，所有操作自动结算，国服专用网络，实时不卡顿"
  },
  {
    image: buildImg,
    title: "构建你的套牌",
    description: "创建属于你的独特套牌，组合不同的卡牌来制定战略"
  },
  {
    image: cardListImg,
    title: "查看你的收藏",
    description: "浏览所有可用卡牌，了解每张卡牌的详细属性和效果"
  },
  {
    image: statistics,
    title: "统计你的战绩",
    description: "保留你的对战录像，实时统计你的每一个套牌的战绩"
  },
];

const RUN = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prev + 100 / 50; // 5s = 50个100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // 切换幻灯片
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // 下一张
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  // 上一张
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <div className={styles.container}>
      {/* 顶部标题 */}
      <div className={styles.header}>
        <div className={styles.headerText}><span style={{ color: '#000' }}>想尝试潜袭吗？</span><span>来矩阵潜袭国服！</span></div>
      </div>

      {/* 中间轮播区域 */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <button className={styles.navButton} onClick={prevSlide}>
            &lt;
          </button>

          <div className={styles.slideWrapper}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.slideContent}>
                    <img className={styles.imageContainer} src={slide.image} alt={slide.title} />
                    <div className={styles.textContainer}>
                      <h2>{slide.title}</h2>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.navButton} onClick={nextSlide}>
            &gt;
          </button>
        </div>

        {/* 指示器 */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div
                className={styles.progress}
                style={index === currentIndex ? { width: `${progress}%` } : {}}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 底部按钮 */}
      <div className={styles.footer}>
        <button className={styles.startButton} onClick={() => window.open('https://play.sneakdoorbeta.net/play', '_blank')}>开始潜袭</button>
      </div>
    </div>
  );
};

export default RUN;