import styles from './style.less';
import { useState, useEffect } from 'react';
import weyland from '@/assets/Faction/NISEI_WEYLAND.svg';
import nbn from '@/assets/Faction/NISEI_NBN.svg';
import hassBioroid from '@/assets/Faction/NISEI_HB.svg';
// import jinteki from '@/assets/Faction/NISEI_JINTEKI.svg';
import jinteki from '@/assets/Faction/NISEI_JINTEKI.webp';
import anarch from '@/assets/Faction/NISEI_ANARCH.svg';
import shaper from '@/assets/Faction/NISEI_SHAPER.svg';
import criminal from '@/assets/Faction/NISEI_CRIMINAL.svg';

// 威兰
import tuijin from '@/assets/Faction/WEYLAND/tuijin.webp';
import zhengfubutie from '@/assets/Faction/WEYLAND/zhengfubutie.webp';
import ziweiji from '@/assets/Faction/WEYLAND/ziweiji.webp';

// 网际
import xingyun from '@/assets/Faction/NBN/xingyun.webp';
import wangjichuanmei from '@/assets/Faction/NBN/wangjichuanmei.webp';
import spin from '@/assets/Faction/NBN/spin.webp';

// 哈斯
import HB from '@/assets/Faction/HASS/HB.webp';
import liao from '@/assets/Faction/HASS/liao.webp';
import nike from '@/assets/Faction/HASS/nike.webp';

// 人间
import jindan from '@/assets/Faction/JINTEKI/jindan.webp';
import renjian from '@/assets/Faction/JINTEKI/renjian.webp';
import qianma from '@/assets/Faction/JINTEKI/qianma.webp';

// 反叛者
import yelang from '@/assets/Faction/ANARCH/yelang.webp';
import tuopan from '@/assets/Faction/ANARCH/tuopan.webp';
import roudu from '@/assets/Faction/ANARCH/roudu.webp';

// 塑造者
import tao from '@/assets/Faction/SHAPER/tao.webp';
import jianzhushi from '@/assets/Faction/SHAPER/jianzhushi.webp';
import chuangzuo from '@/assets/Faction/SHAPER/chuangzuo.webp';

// 逆法者
import sadiya from '@/assets/Faction/CRIMINAL/sadiya.webp';
import yingxiao from '@/assets/Faction/CRIMINAL/yingxiao.webp';
import caifuzhuanyi from '@/assets/Faction/CRIMINAL/caifuzhuanyi.webp';

import classNames from 'classnames';

const FactionList = [
  {
    name: '哈斯生化', subTitle: 'HASS-BIOROID', img: hassBioroid, color: '#7E489C',
    content: ['哈斯生化在义体与人工智能方面世界领先，其最知名的产品如同其名所示便是生化人——义体构成的安卓人，由脑录技术驱动。制造生化人的流程，已经先进到这些类人型的“劳动力解决方案”外表与人类几乎无异。', '生化人的出现永久地改变了世界。公司和富人争先恐后地替换掉手下的劳工，工薪阶级纷纷失业。不但如此，生化人还能超越人类的身体能力，可以在人类无法承受的恶劣条件下工作。哈斯生化金技体育分部的人造运动员，向大众展示了生化人优秀的反应速度、敏捷与力量。脑扫描图在网络空间同样可以使用。哈斯生化用与生化人大脑相同的软件，造出了能够自学习，自适应，智取入侵者的防火墙。', '除生化人外，哈斯生化在神经元通道与义体方面的专利，使其在义肢设计与工业制造领域也占据着主导地位。依靠超人的效率与精密工程，他们无论在地球还是月球都能保持价格优势。'],
    cards: [HB, liao, nike]
  },
  {
    name: '人间会社', subTitle: 'JINTEKI', img: jinteki, color: 'red',
    content: ['生命亦为代码，代码皆可改变。人间会社的生物科技帝国处处都在诠释着这一点，从医学科技到生化武器。人间会社最为人知的一点是其对于克隆体生产的垄断，这使其得以成为哈斯生化的竞争对手。坊间传言称人间会社会从动物基因组中提取想要的特性，但人间会社拒绝公开其商业秘密。', '对人间会社来说，保守秘密绝非儿戏。尽管他们很少会主动出击脏了自己的手，但他们会毫不留情地为没有戒备的潜袭者设下陷阱，激活危险的防火墙。又一个逆法者被自己的设备炸死是一桩悲剧事件，但绝不是刑事案件。', '潜袭者常常讲述自己对人间会社进行潜袭的故事：处处都会遇到阻碍，仿佛有人能够预知自己的一举一动。有人说人间会社利用其克隆体项目来研究人类灵能的潜力，但严肃的科学家认为这种说法并不成立。', '人间会社对此不置可否。'],
    cards: [jindan, renjian, qianma]
  },
  {
    name: '网际传媒', subTitle: 'NBN', img: nbn, color: '#FFDE00',
    content: ['网际传媒是全世界最大的新闻与娱乐集团。无论你要做什么，都会经由网际传媒。获取新闻，检索信息，自然是通过网际传媒。与好友聊天，也要依靠网际传媒。看电视，玩游戏，全都是网际传媒。网际传媒的增强现实空间，是将你与月球的恶劣生活环境区隔开来的唯一屏障。就连孩子的教育也离不开网际传媒。这一切都会产生海量的数据，销售这些数据又产生了大量的利润。通过这些平台，网际传媒已经确立了自身对全球生活乃至地外生活都不可或缺的地位。', '但网际传媒能获得如此地位最大的原因，却是一件无处不在以至于难以察觉的东西：所有的公网流量都要经过网际传媒。要挑战他们对媒体的控制，危险重重——你可能会发现你的银行帐户被清空，你的医保失效，你的73级术士号突然被注销。但这不也挺好吗？毕竟，没了他们你要怎么活呢？'],
    cards: [xingyun, wangjichuanmei, spin]
  },
  {
    name: '威兰财团', subTitle: 'WEYLAND', img: weyland, color: 'rgb(137 161 137)',
    content: ['金钱即权力。权力即金钱。没有人知道威兰财团的掌控范围到底有多大，但他们一直在从中获利。作为全世界最大的企业集团，威兰财团旗下——在有形与无形中——拥有着上百家巨型公司。银行业、安保业、军火业、采矿业、建造业，无一不在他们的管辖范围之内。无论什么情况下，威兰财团都能拔得头筹。', '名为“豆茎”的太空电梯高耸入云，直达大气层之外，将威兰财团的影响力从全球带到了太空轨道以及月球。人类的征途是星辰大海，而威兰财团将会不惜一切代价达到这一目标。', '与财团为敌的人有很多，但这些人往往很快就死于非命。楼倒屋塌。无人机误伤。枪击谜案。然而责任从来都不是威兰财团的，因为他们从来都不在现场。执行黑色行动的特工与威兰的公关团队会确保这一点。威兰财团永远居于幕后，操纵着时局，以确保他们对世界的愿景永远不受动摇。'],
    cards: [tuijin, ziweiji, zhengfubutie]
  },
  {
    name: '反叛者', subTitle: 'ANARCH', img: anarch, color: '#E26B35',
    content: ['王侯将相，宁有种乎。', '经过几个世纪的公司控制，市场法则似乎已经像物理法则一样实实在在，牢不可破。当你无法再忍受“理智地”活下去的时候，你只好去尝试不可能的事情。而有时，这竟然成功了。这是因为我们已别无选择，也是因为我们原来被欺骗了。因为一切皆有可能。', '驱使着反叛者的感情多种多样，一如他们所采用的破坏性战术。对于公司来说，“没有一份作战计划在接敌后还有效”，指的就是这样的敌手。反叛者的行为无法预测，他们不断挑战极限，他们潜袭是为了更好的未来。'],
    cards: [yelang, tuopan, roudu]
  },
  {
    name: '逆法者', subTitle: 'CRIMINAL', img: criminal, color: '#060607ff',
    content: ['一些潜袭者发现，唯一在体制内出人头地的方法就是绕过体制。', '这些逆法者知道引起别人的注意并非明智之举，因此他们隐藏踪迹，偷偷潜入公司帐户，或是混入人群，假装是一位可信的朋友，以获得他们不应拥有的权限。逆法者潜袭是因为有利可图，无论是通过吸走资金还是通过将公司机密卖给最高出价者。', '只要还有办法从潜袭中获利，逆法者就会继续潜袭。'],
    cards: [sadiya, yingxiao, caifuzhuanyi]
  },
  {
    name: '塑造者', subTitle: 'SHAPER', img: shaper, color: '#4CB148',
    content: ['塑造者进行潜袭。', '他们潜袭不是为了金钱，也不是为了改变。他们潜袭，只因他们能做得到。他们潜袭是为了出名，为了乐趣。他们潜袭是因为，对他们来说，潜袭是自我表现最纯粹的形式。潜袭是一项挑战，如何调校出最完美的程序，如何找到问题最高效的解决方案。尽管他们可能要花上一些时间才能找到最优解，但一旦找到，他们便能够攻破任何服务器。服务器的内容并不重要。', '重要的是潜袭本身。'],
    cards: [tao, jianzhushi, chuangzuo]
  },
]

const FACTION = () => {
  const [currentSelected, setCurrentSelected] = useState('HASS-BIOROID')
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hoveredImg, setHoveredImg] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animationState, setAnimationState] = useState('enter'); // 'enter' 或 'exit'
  const [selectedFaction, setSelectedFaction] = useState(null)

  // 当 currentSelected 改变时，先播放退出动画，再播放进入动画
  useEffect(() => {
    setAnimationState('exit');
    // 退出动画结束后，播放进入动画
    const exitTimer = setTimeout(() => {
      setAnimationState('enter');
      setSelectedFaction(FactionList.find(item => item.subTitle === currentSelected))
    }, 600); // 与退出动画时长一致

    return () => clearTimeout(exitTimer);
  }, [currentSelected]);


  const handleMouseEnter = (item, e) => {
    setHoveredItem(item)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseImgEnter = (item, e) => {
    setHoveredImg(item)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }


  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const handleMouseImgLeave = () => {
    setHoveredImg(null)
  }
  return (
    <div className={styles.faction}>
      <div className={styles.list}>
        <div className={styles.listContent}>
          {FactionList?.map(item => (
            <div
              style={{
                color: (hoveredItem === item || currentSelected === item.subTitle) ? item.color : '#fff'
              }}
              className={classNames(styles.item, currentSelected === item.subTitle ? styles['item-selected'] : '')}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setCurrentSelected(item.subTitle)}
            >
              <span className={styles.title}>{item.name}</span>
              <span className={styles.subTitle}>{item.subTitle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 悬浮图片展示 */}
      {hoveredItem && (
        <div
          className={styles.floatingImage}
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
          }}
        >
          <img src={hoveredItem.img} alt={hoveredItem.name} />
        </div>
      )}

      {/* 右侧内容展示区 */}
      <div className={styles.rightContent}>
        {selectedFaction && (
          <div className={styles.contentWrapper}>
            {/* 内容部分 - 淡入淡出动画 */}
            <div className={styles.textContent}>
              {selectedFaction.content.map((text, index) => (
                <p
                  className={classNames(styles.animatedText, {
                    [styles.exit]: animationState === 'exit'
                  })}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    '--reverse-delay': `${(selectedFaction.content.length - index - 1) * 0.1}s`
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* 卡片部分 - 卡牌桌面游戏效果 */}
            <div className={styles.cardContent}>
              {selectedFaction.cards.map((card, index) => (
                <img
                  onMouseEnter={(e) => handleMouseImgEnter(card, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseImgLeave}
                  src={card}
                  alt={`card-${index}`}
                  className={classNames(styles.animatedCard, {
                    [styles.exit]: animationState === 'exit'
                  })}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    '--rotation-angle': `${15 + index * 5}deg`,
                    '--reverse-delay': `${(selectedFaction.cards.length - index - 1) * 0.2}s`
                  }}
                />
              ))}
            </div>
            {/* 悬浮图片展示 */}
            {hoveredImg && (
              <div
                className={styles.floatingImageCard}
                style={{
                  left: mousePosition.x - 100,
                  top: mousePosition.y - 300,
                }}
              >
                <img src={hoveredImg} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FACTION