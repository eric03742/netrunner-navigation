import beijiguangCards from '@/assets/Environment/cycle/beijiguangCards.webp';
import beijiguangCover from '@/assets/Environment/cycle/beijiguangCover.webp';
import beijiguangCover2 from '@/assets/Environment/cycle/beijiguangCover2.webp';
import beijiguangLogo from '@/assets/Environment/cycle/beijiguangLogo.webp';
import jiefangCards from '@/assets/Environment/cycle/jiefangCards.webp';
import jiefangCover2 from '@/assets/Environment/cycle/jiefangCover2.webp';
import jiefangCover from '@/assets/Environment/cycle/jiefangCover.webp';
import jiefangLogo from '@/assets/Environment/cycle/jiefangLogo.webp';
import mainCards from '@/assets/Environment/cycle/mainCards.webp';
import mainCover from '@/assets/Environment/cycle/mainCover.webp';
import mainLogo from '@/assets/Environment/cycle/mainLogo.webp';
import qiyiCards from '@/assets/Environment/cycle/qiyiCards.webp';
import qiyiCover from '@/assets/Environment/cycle/qiyiCover.webp';
import qiyiCover2 from '@/assets/Environment/cycle/qiyiCover2.webp';
import qiyiLogo from '@/assets/Environment/cycle/qiyiLogo.webp';
import yangwangCards from '@/assets/Environment/cycle/yangwangCards.webp';
import yangwangCover from '@/assets/Environment/cycle/yangwangCover.webp';
import yangwangLogo from '@/assets/Environment/cycle/yangwangLogo.webp';

import zhigaodianCover from '@/assets/Environment/cycle/zhigaodianCover.webp';
import zhigaodianLogo from '@/assets/Environment/cycle/zhigaodianLogo.webp';

export const cycleText = [
  {
    title: '核心网关',
    key: 'main',
    time: '发布时间：2021年3月28日发布，2023年7月3日发布重制版',
    text: <div>
      <p>《核心网关》是Null Signal Games的基础系列。本系列旨在提供开箱即用的学习体验，为您提供开始玩矩阵潜袭所需的一切。其中的卡牌简单而强力，将会成为玩家卡牌收藏的基石。</p>
    </div>,
    content: <div>
      <p>《核心网关》包含：</p>
      <p>·41种公司卡牌（含4种公司ID卡牌）；</p>
      <p>·34种潜袭者卡牌（含3种潜袭者ID卡牌）；</p>
      <p>·11种其他卡牌，让玩家快速开始游戏。</p>
      <p>以上卡牌每种3张，合计258张。</p>
    </div>,
    logo: mainLogo,
    cards: mainCards,
    covers: [mainCover],
    color: 'rgb(221 9 27)'
  },
  {
    title: '仰望',
    key: 'yangwang',
    time: '发布时间：2025年4月24日',
    text: <div>
      <p>《仰望》在《核心网关》奠定的基础上扩展了核心卡池，完善了3个潜袭者派系与4个公司派系的主题特色与机制定位。它是新玩家理想的进阶之选，与《核心网关》共同构成核心套装，成为标准赛制与新启赛制的基准。</p>
      <p>正如其名，《仰望》旨在提升竞赛强度与战略高度。其背景设定于拔地而起的太空电梯及其周边的巨型都市，预示着新一轮的角逐正在这座高耸入云的建筑中悄然展开。</p>
    </div>,
    content: <div>
      <p>《仰望》包含：</p>
      <p>·48种公司卡牌（含8种公司ID）；</p>
      <p>·34种潜袭者卡牌（含6种潜袭者ID）；</p>
      <p>·11种其他卡牌，让玩家快速了解一些进阶规则。</p>
      <p>以上卡牌每种3张，共279张。</p>
    </div>,
    logo: yangwangLogo,
    cards: yangwangCards,
    covers: [yangwangCover],
    color: 'rgb(29 181 217)'
  },
  {
    title: '余烬循环',
    subTitle: '余烬循环由《坍落》和《起义》2个扩展组成。',
    key: 'qiyi',
    time: <div>
      <p>《坍落》2019年3月18日发布，2024年2月18日发布重制版</p>
      <p>《起义》2019年12月16日发布，2024年2月16日发布重制版</p>
    </div>,
    text: <div>
      <p>《坍落》和《起义》是Null Signal Games的第一个原创扩充，是充满趣味的新设计，既延续了FFG时代矩阵的很多机制，也有类似封锁这样的原创机制。</p>
    </div>,
    content: <div>
      <p>《坍落》包含：</p>
      <p>·35种公司卡牌（含2种公司ID）；</p>
      <p>·30种潜袭卡牌（含2种潜袭者ID）；</p>
      <p>·1张封面卡牌。</p>
      <p>以上卡牌每种3张，一共198张卡牌。</p>
      <p>《起义》包含：</p>
      <p>·35种公司卡牌（含2种公司ID）；</p>
      <p>·30种潜袭卡牌（含1种潜袭者ID）；</p>
      <p>·1张封面卡牌。</p>
      <p>以上卡牌每种3张，一共198张卡牌。</p>
    </div>,
    logo: qiyiLogo,
    cards: qiyiCards,
    covers: [qiyiCover, qiyiCover2],
    color: 'rgb(245 128 25)'
  },
  {
    title: '北极光循环',
    subTitle: '北极光循环由《极昼》和《幻日》2个扩展组成。',
    key: 'beijiguang',
    time: <div>
      <p>《极昼》2022年7月22日发布</p>
      <p>《幻日》2022年12月9日发布</p>
    </div>,
    text: <div>
      <p>《极昼》和《幻日》背景设定在寒冷的北极圈内。《极昼》中，公司掘起正在消融的冻土和日渐变薄的冰盖以寻找下一个掠夺物，而潜袭者不得不利用新的招数来阻止他们。《幻日》中，极地的黑客、窃贼和生态恐怖分子重创了公司，而公司也还以颜色，开始主动出击，追捕罪魁祸首。</p>
    </div>,
    content: <div>
      <p>《极昼》包含：</p>
      <p>·35种公司卡牌（包含2种公司ID）；</p>
      <p>·30种潜袭者卡牌（包含2种潜袭者ID）；</p>
      <p>·9种其他卡牌，介绍了一些新机制以及3种目标牌。</p>
      <p>以上卡牌每种3张，共222张卡牌。</p>
      <p>《幻日》包含：</p>
      <p>·34种公司卡牌（包含3种公司ID）；</p>
      <p>·29种潜袭者卡牌（包含2种潜袭者ID）；</p>
      <p>·9种其他卡牌，介绍了一些新机制以及3种目标牌。</p>
      <p>以上卡牌中【套娃】为6种共18张卡牌，其他每种3张，共231张卡牌。</p>
    </div>,
    logo: beijiguangLogo,
    cards: beijiguangCards,
    covers: [beijiguangCover, beijiguangCover2],
    color: 'rgb(203 203 203)'
  }
  ,
  {
    title: '解放循环',
    subTitle: '解放循环由《自动机倡议》和《即兴叛乱》组成。',
    key: 'jiefang',
    time: <div>
      <p>《自动机倡议》2023年7月31日发布</p>
      <p>《即兴叛乱》2024年3月18日发布</p>
    </div>,
    text: <div>
      <p>《自动机倡议》和《即兴叛乱》背景设在巴西。《自动机倡议》中，立法机构决定取消生化人的人权，当愤怒的人们在国民议会前示威抗议时，一群潜袭者正在努力揭发公司在这次事件中扮演的角色。《即兴叛乱》中，剥夺生化人人权的法案得到通过，造成巴西大规模的示威活动，并慢慢演变为暴力。在总统即将签名让法案生效时，努力保护生化人人权的社会运动组织者组成了意想不到的联盟并决定他们将做什么。</p>
    </div>,
    content: <div>
      <p>《自动机倡议》包含：</p>
      <p>·35种公司卡牌（包含2种公司ID）；</p>
      <p>·30种潜袭者卡牌（包含2种潜袭者ID）；</p>
      <p>·7种其他卡牌，介绍了一些新机制。</p>
      <p>以上卡牌每种3张，共216张卡牌。</p>
      <p>《即兴叛乱》包含：</p>
      <p>·35种公司卡牌（包含2种公司ID）；</p>
      <p>·30种潜袭者卡牌（包含1种潜袭者ID）；</p>
      <p>·6种其他卡牌，介绍了一些新机制。</p>
      <p>以上卡牌每种3张，共213张卡牌。</p>
    </div>,
    logo: jiefangLogo,
    cards: jiefangCards,
    covers: [jiefangCover, jiefangCover2],
    color: 'rgb(128 128 237)'
  },
  {
    title: '制高点',
    subTitle: '制高点是矩阵潜袭推出的全新独立扩展套组。',
    key: 'zhigaodian',
    time: <div>
      <p>《制高点》2026年3月2日发布</p>
    </div>,
    text: <div>
      <p>《制高点》将带领玩家重访NSG以往作品曾展现的矩阵潜袭世界图景——从北极的冰雪秘境、巴西的暴动冲突，到永不停歇的巨大城市卡里曼丹，并特别聚焦月球的高远世界。</p>
    </div>,
    content: <div>
      <p>《制高点》包含：</p>
      <p>·41种公司卡牌（包含2种公司ID）；</p>
      <p>·25种潜袭者卡牌（包含2种潜袭者ID）；</p>
      <p>·20种修订卡牌（修订之前卡牌的文本）；</p>
      <p>以上卡牌每种3张，共192张卡牌。</p>
    </div>,
    logo: zhigaodianLogo,
    cards: null,
    covers: [zhigaodianCover],
    color: 'rgb(128, 237, 152)'
  }
]

export const banTextStandard = {
  corporation: [
    { cycle: '《核心网关》', number: 'No.36', cn: '光脑体变', id: '30036' },
    { cycle: '《核心网关》', number: 'No.51', cn: '网际传媒：身临其境', id: '30051' },
    { cycle: '《核心网关》', number: 'No.67', cn: '地外办公室', id: '30067' },
    { cycle: '《余烬》', number: 'No.41', cn: '蜇！', id: '26041' },
    { cycle: '《余烬》', number: 'No.97', cn: '瓦什隆计划', id: '26097' },
    { cycle: '《余烬》', number: 'No.108', cn: '记忆冲净', id: '26108' },
    { cycle: '《余烬》', number: 'No.114', cn: '贝罗娜', id: '26114' },
    { cycle: '《余烬》', number: 'No.116', cn: '打钱工作室', id: '26116' },
    { cycle: '《余烬》', number: 'No.127', cn: '卡扬贝网阵', id: '26127' },
    { cycle: '《余烬》', number: 'No.128', cn: '赛博杀毒剂沙盒', id: '26128' },
    { cycle: '《余烬》', number: 'No.129', cn: '误导', id: '26129' },
    { cycle: '《北极光》', number: 'No.11', cn: '纽纱·“黑貂”·辛塔什塔: 交响奇才', id: '33011' },
    { cycle: '《北极光》', number: 'No.51', cn: '德拉戈•伊万诺夫', id: '33051' },
    { cycle: '《北极光》', number: 'No.59', cn: '斯维亚托戈尔号挖掘机', id: '33059' },
    { cycle: '《北极光》', number: 'No.63', cn: '开采', id: '33063' },
    { cycle: '《北极光》', number: 'No.106', cn: '万象·基林博士', id: '33106' },
    { cycle: '《北极光》', number: 'No.111', cn: '纳尼西维克网阵', id: '33111' },
    { cycle: '《解放》', number: 'No.58', cn: '赛博砂采集者', id: '34058' },
    { cycle: '《解放》', number: 'No.94', cn: '灰白终章', id: '34094' },
    { cycle: '《解放》', number: 'No.111', cn: '支流', id: '34111' },
    { cycle: '《仰望》', number: 'No.67', cn: '润色', id: '35067' }
  ],
  runner: [
    { cycle: '《核心网关》', number: 'No.6', cn: '剁肉刀', id: '20006' },
    { cycle: '《余烬》', number: 'No.16', cn: '会计师', id: '26016' },
    { cycle: '《余烬》', number: 'No.26', cn: '粮食', id: '26026' },
    { cycle: '《余烬》', number: 'No.66', cn: '白 星子：未名主角', id: '26066-front' },
    { cycle: '《余烬》', number: 'No.67', cn: '狂舞', id: '26067' },
    { cycle: '《北极光》', number: 'No.25', cn: '坚忍号', id: '33025' },
    { cycle: '《北极光》', number: 'No.74', cn: '查希亚·"蒙獒"·钢图拉嘎', id: '33074' },
    { cycle: '《北极光》', number: 'No.90', cn: 'K2CP 涡轮机', id: '33090' },
    { cycle: '《北极光》', number: 'No.91', cn: '世界树', id: '33091' },
    { cycle: '《北极光》', number: 'No.94', cn: '套娃', id: '33094' },
    { cycle: '《解放》', number: 'No.87', cn: '特技球', id: '34087' }
  ]
}

export const banTextStarter = {
  corporation: [
    { cycle: '《核心网关》', number: 'No.40', cn: '无暇发布会', id: '30040' },
    { cycle: '《核心网关》', number: 'No.51', cn: '网际传媒：身临其境', id: '30051' },
    { cycle: '《仰望》', number: 'No.45', cn: '梅西娅 B4LL4RD', id: '35045' },
    { cycle: '《制高点》', number: 'No.66', cn: '让他们做个美梦', id: '36066' },
  ],
  runner: [
    { cycle: '《核心网关》', number: 'No.6', cn: '剁肉刀', id: '30006' },
    // { cycle: '《解放》', number: 'No.12', cn: 'S 型猴翻', id: '34012' },
    // { cycle: '《解放》', number: 'No.89', cn: '凝露', id: '34089' }
  ]
}