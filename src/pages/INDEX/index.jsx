import styles from './style.less';
import { useState, useEffect, useCallback } from 'react';
import netRunner from '@/assets/netRunner.webp'
import introduction1 from '@/assets/IndexPage/introduction1.webp'
import introduction2 from '@/assets/IndexPage/introduction2.webp'
import introduction3 from '@/assets/IndexPage/introduction3.webp'
import introduction4 from '@/assets/IndexPage/introduction4.webp'
import introduction5 from '@/assets/IndexPage/introduction5.webp'
import NISEI_CLICK from '@/assets/IndexPage/NISEI_CLICK.svg'
import accountQRCode from '@/assets/IndexPage/accountQRCode.webp'
import { Modal } from 'antd';

const INDEX = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // 添加模态框状态
  const totalPages = 6;

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
  }, [isScrolling, currentPage, totalPages]);

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

  // 处理触摸开始事件
  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientY);
  }, []);
  // 处理触摸结束事件
  const handleTouchEnd = useCallback((e) => {
    if (!touchStartX) return;

    const touchEndX = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;

    // 判断滑动距离是否足够触发翻页
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // 向上滑动，切换到下一页
        handleScroll('down');
      } else {
        // 向下滑动，切换到上一页
        handleScroll('up');
      }
    }

    setTouchStartX(0);
  }, [touchStartX, handleScroll]);

  useEffect(() => {
    // 添加事件监听器
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      // 清理事件监听器
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchEnd]);

  // 页面内容数据
  const pageContents = [
    {
      title: "未来已至",
      text: "人类已经通过不同的方式，成功扩张到太阳系中。月球和火星已经变为殖民地。一项改造红色星球的计划正在进行中，唯一的阻碍是内战的爆发使火星上众多拱顶所被封锁。地球上，一台巨大的太空电梯，建立在名为新洛杉矶的庞大城邦中心附近，连接至低空轨道。这里是太阳系内的贸易枢纽站，大部分人称其为“豆茎”。",
      img: introduction1
    },
    {
      title: "脑内映射",
      text: "最终诞生了“脑内映射”，这种技术可以将人类意识以电子化的方式，存储在复杂而精密的具有脑机接口的设备中。实体的鼠标和键盘成为了古董，手势接口和虚拟显示变得普及。精英级用户可将电脑直接连通至大脑来进行“接入”。",
      img: introduction2
    },
    {
      title: "巨型公司",
      text: "被大众称为“公司”的超巨型企业集团，掌控着日常生活的方方面面：食物、3D娱乐、影音以及就业机会。人间会社和哈斯生化改写了生命的定义，致力于创造具有脑波记忆的人工智能意识克隆体和生化人。威兰财团控制着豆茎上下运作的一切资源。而网际传媒牢牢控制着地球上有史以来最广博的媒体网络，塑造着你的梦想与思维方式。",
      img: introduction5
    },
    {
      title: "网络之变",
      text: "这些俯瞰一切，倾听一切的数字矩阵环绕着地球，并直达太阳系深处。每一秒在网络中奔腾的数据流，其数据量就已超过曾经五千年的书面文字总和。这是一个监视网，一个金融体系，一个大图书馆——它是现代文明的脊柱。但这也是公司们唯一的弱点。",
      img: introduction3
    },
    {
      title: "潜袭者志",
      text: "绝不可能被精确定位或锁定。游侠黑客们——拥有硬件、软件和具有足以挑战系统技巧的电脑专家，利用网络的延伸建立自己的优势。其中有些人决心揭露系统核心背后隐藏的腐败，将数亿民众从公司主宰者们的伪善中唤醒。其他人只打算赚取一些私利，或在最终的平台上展现一下自己的价值。但无论动机为何，这些个体行为有一个共同的交集目标：数字世界的独立。他们的名字叫作潜袭者。",
      img: introduction4
    },
    // {
    //   title: "故事驱动",
    //   text: "在充满阴谋与背叛的世界中，你的选择将决定故事的走向和结局。"
    // }
  ];

  return (
    <div className={styles.IndexPage}>
      {/* 当 currentPage 为 0 时显示 NISEI_CLICK 关注公众号 */}
      {currentPage === 0 && (
        <div
          className={styles.niseiClickContainer}
          onClick={() => setModalVisible(true)}
        >
          <span className={styles.niseiClickText}>关注公众号</span>
          <div className={styles.qrcode}><img src={NISEI_CLICK} className={styles.niseiClickIcon} />矩阵潜袭</div>
        </div>
      )}

      {/* 弹窗模态框 */}
      <Modal
        open={modalVisible}
        getContainer={() => document.getElementById('root')}
        onCancel={() => setModalVisible(false)}
        wrapClassName={styles["index-modal"]}
        footer={null}
        width={400}
        centered
      >
        <div className={styles.modalContent}>
          <p className={styles.modalText}>扫码关注矩阵潜袭公众号</p>
          <img
            src={accountQRCode}
            alt="Account QR Code"
            className={styles.qrCodeImage}
          />
        </div>
      </Modal>

      {/* 页面内容容器 */}
      <div className={styles.pageContainer}>
        {/* 原始欢迎页面 */}
        <div
          className={`${styles.page} ${styles.welcomePage} ${currentPage === 0 ? styles.active : ''}`}
        >
          <div className={styles['welcome-content']}>
            <img className={styles['welcome-logo']} src={netRunner} />
            <div className={styles['welcome-text-top']}><span style={{ color: 'rgb(84 83 83)', backgroundColor: '#e6d8d896', fontSize: 40 }}>欢迎来到</span></div>
            <div className={styles['welcome-text-bottom']}>矩阵潜袭的<span style={{ color: '#cacacaff' }}>世界</span></div>
          </div>
        </div>

        {/* 四个新增页面 */}
        {pageContents.map((content, index) => (
          // index > 0 && (
          <div
            key={index}
            className={`${styles.page} ${styles.animatedPage} ${currentPage === index + 1 ? styles.active : ''}`}
          >
            {/* 文本框 - 淡出并移动到左侧 */}
            <div className={`${styles.animatedText} ${currentPage === index + 1 ? styles.textActive : ''}`}>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
            </div>

            {/* 图片 - 旋转淡出到右侧 */}
            <div className={`${styles.animatedImage} ${currentPage === index + 1 ? styles.imageActive : ''}`}>
              <img src={content.img} alt="NetRunner" />
            </div>
          </div>
          // )
        ))}
        {/* 页面指示器 - 移到页面底部 */}
        <div className={styles.indicators}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentPage ? styles.active : ''}`}
              onClick={() => !isScrolling && setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default INDEX;