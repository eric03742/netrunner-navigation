import { useState } from 'react';
import style from './style.less';
import { deckList, Words } from './content';

const DECK = () => {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'detail'
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right'); // 'left' or 'right'
  const [copyStatus, setCopyStatus] = useState(''); // 用于显示复制状态

  const handleDeckClick = (deck) => {
    if (isAnimating) return; // 防止在动画过程中重复点击

    setSelectedDeck(deck);
    setIsAnimating(true);
    setDirection(deck.type === 'runner' ? 'left' : 'right');

    setTimeout(() => {
      setCurrentView('detail');
      setIsAnimating(false);
    }, 300);
  };

  const handleBackClick = () => {
    if (isAnimating) return; // 防止在动画过程中重复点击

    setIsAnimating(true);
    setDirection(selectedDeck.type === 'runner' ? 'right' : 'left');

    setTimeout(() => {
      setCurrentView('main');
      setIsAnimating(false);
    }, 300);
  };

  // 将卡组数据按类型分组显示
  const renderDeckList = () => {
    return (
      <div className={style.deckListContainer}>
        <h1>新手预组卡组</h1>
        <p>仅使用《核心网关》基础包构筑的卡组，是由《核心网关》的首席设计师CritHitD20设计。而使用<span style={{ color: '#000' }}>“核心网关+仰望”</span>扩展包构筑的卡组则由Phi（又名Girometics，游戏开发与新启赛制卡牌筛选团队成员）设计。在每套卡组下方，Sara都简单说明了该卡组的玩法，虽然这些卡组的构筑可能不够合理，但尽可能是围绕ID的玩法去构筑。我们希望这些卡组能为你在《矩阵潜袭》的旅程中提供一个有趣的起点，并激发你构筑属于自己的卡组！</p>
        <p>《矩阵潜袭》的新手示范卡组包括<span style={{ color: '#000' }}>7套单基础+21套双基础</span>的卡组，每个ID都至少有一个卡组。不管是《核心网关》或者《仰望》基础包，里面的卡牌都是各3张，<span style={{ color: 'rgb(232 16 16)', fontWeight: 600 }}>玩家直接抄牌表进行构筑即可。</span></p>
        <div className={style.deckGrid}>
          {deckList.map((deck, index) => (
            <div
              key={index}
              className={style.deckCard}
              onClick={() => handleDeckClick(deck)}
            >
              <div className={style.deckImageContainer}>
                <img src={deck.img} alt={deck.name} className={style.deckImage} />
              </div>
              <div className={style.deckInfo}>
                <h3 className={style.deckName}>{deck.name}</h3>
                <div className={`${style.deckType} ${deck.type === 'runner' ? style.runner : style.corp}`}>
                  {deck.type === 'runner' ? '黑客' : '公司'}
                </div>
                <div className={style.deckBasic}>
                  {deck.basic === 1 ? '单基础' : '双基础'}
                </div>
                {/* 显示关键词 */}
                {deck.keywords && deck.keywords.map((keyword, index) => (
                  <span key={index} className={style.keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // 转换卡组数据为HTML格式
  const convertDataToHtml = (data) => {
    const elements = [];

    // 对于每个Words中的词，查找它在数据中的位置
    const sections = [];

    // 创建一个包含所有关键词位置的对象
    Words.forEach((word, wordIndex) => {
      const regex = new RegExp(`(${word}\\s*\\([^)]+\\))`, 'g');
      let match;

      while ((match = regex.exec(data)) !== null) {
        sections.push({
          word: word,
          title: match[1],
          startIndex: match.index,
          endIndex: regex.lastIndex,
          wordIndex: wordIndex
        });
      }
    });

    // 按在字符串中的位置排序
    sections.sort((a, b) => a.startIndex - b.startIndex);

    // 处理每个部分
    sections.forEach((section, sectionIndex) => {
      // 添加标题
      elements.push(
        <div key={`title-${section.word}-${sectionIndex}`} className={style.cardCategoryTitle}>
          {section.title}
        </div>
      );

      // 确定这一部分的内容范围
      let contentEndIndex = data.length;
      if (sectionIndex < sections.length - 1) {
        contentEndIndex = sections[sectionIndex + 1].startIndex;
      }

      // 提取内容部分
      const content = data.substring(section.endIndex, contentEndIndex);

      // 匹配卡牌项目
      // 匹配模式如 "3x 卡牌名称" 或 "3x 卡牌名称 ●●●"
      // 改进的正则表达式，允许卡牌名称中包含数字，但不能以数字开头
      const cardRegex = /(\d+x\s+[^\d\(][^$]*?)(?=\d+x\s+[^\d\(]|$)/g;
      let cardMatch;

      while ((cardMatch = cardRegex.exec(content)) !== null) {
        const cardText = cardMatch[1].trim();
        if (cardText) {
          elements.push(
            <div key={`card-${section.word}-${sectionIndex}-${cardMatch.index}`} className={style.cardItem}>
              {cardText}
            </div>
          );
        }
      }
    });

    return elements;
  };  // 渲染卡组详情
  const renderDeckDetail = () => {
    if (!selectedDeck) return null;

    // 复制卡组内容到剪贴板的函数
    const copyToClipboard = async () => {
      try {
        let formattedData = selectedDeck.data;

        // 为Words数组中匹配到的类别标题添加换行
        Words.forEach(word => {
          const regex = new RegExp(`(${word}\\s*\\([^)]+\\))`, 'g');
          formattedData = formattedData.replace(regex, '\n$1\n');
        });

        // 在数字x前添加换行
        formattedData = formattedData.replace(/(\d+x)/g, '\n$1');

        // 移除可能的多余空行并清理
        formattedData = formattedData.replace(/\n{2,}/g, '\n').trim();

        await navigator.clipboard.writeText(formattedData);
        setCopyStatus('已复制!');
        setTimeout(() => setCopyStatus(''), 2000); // 2秒后清除状态提示
      } catch (err) {
        setCopyStatus('复制失败');
        console.error('复制失败:', err);
        setTimeout(() => setCopyStatus(''), 2000);
      }
    };

    return (
      <div className={style.deckDetailContainer}>
        <div className={style.detailContent}>
          <button className={style.backButton} onClick={handleBackClick}>
            <svg className={style.arrowIcon} viewBox="0 0 24 24">
              <path
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                strokeWidth="2"
                stroke="#fff"
                fill="none"
              />
            </svg>
          </button>
          <div className={style.detailImageContainer}>
            <img src={selectedDeck.img} alt={selectedDeck.name} className={style.detailImage} />
          </div>

          <div className={style.detailInfoContainer}>
            <div className={style.detailInfo}>
              <h1 className={style.detailName}>{selectedDeck.name}</h1>
              <div className={style.detailTags}>
                <div className={`${style.detailType} ${selectedDeck.type === 'runner' ? style.runner : style.corp}`}>
                  {selectedDeck.type === 'runner' ? '黑客卡组' : '公司卡组'}
                </div>
                <div className={style.detailBasic}>
                  {selectedDeck.basic === 1 ? '单基础' : '双基础'}
                </div>
                {/* 在详情页显示关键词 */}
                {selectedDeck.keywords && selectedDeck.keywords.map((keyword, index) => (
                  <span style={{ fontSize: '1rem', padding: '8px 16px' }} key={index} className={style.keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className={style.detailDescription}>
              <h2>玩法描述</h2>
              <p>{selectedDeck.instructions}</p>
            </div>

            <div className={style.detailData}>
              <div className={style.cardListHeader}>
                <h2>卡组内容</h2>
                <button className={style.copyButton} onClick={copyToClipboard}>
                  {copyStatus || '复制卡组'}
                </button>
              </div>
              <div className={style.cardList}>
                {convertDataToHtml(selectedDeck.data)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.deckContainer}>
      {/* 主页面 */}
      <div
        className={`${style.page} ${style.mainPage} ${currentView === 'main'
          ? isAnimating
            ? direction === 'left'
              ? style.slideOutToLeft
              : style.slideOutToRight
            : style.active
          : isAnimating
            ? direction === 'left'
              ? style.slideInFromRight
              : style.slideInFromLeft
            : style.hidden
          }`}
      >
        {renderDeckList()}
      </div>

      {/* 详情页面 */}
      <div
        className={`${style.page} ${style.detailPage} ${currentView === 'detail'
          ? isAnimating
            ? direction === 'left'
              ? style.slideInFromLeft
              : style.slideInFromRight
            : style.active
          : isAnimating
            ? direction === 'left'
              ? style.slideOutToRight
              : style.slideOutToLeft
            : style.hidden
          }`}
      >
        {renderDeckDetail()}
      </div>
    </div>
  );
};

export default DECK;