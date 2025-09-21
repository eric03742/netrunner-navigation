import './style.less';
import { QqOutlined, WechatOutlined, RadarChartOutlined, FileDoneOutlined, WalletOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react';
import { Modal, message } from 'antd'
import favicon0 from '@/assets/Community/favicon0.png'
import favicon1 from '@/assets/Community/favicon1.png'
import favicon2 from '@/assets/Community/favicon2.png'
import favicon3 from '@/assets/Community/favicon3.ico'
import favicon4 from '@/assets/Community/favicon4.ico'
import favicon5 from '@/assets/Community/favicon5.ico'
import QQQrcode from '@/assets/Community/QQQrcode.webp'
import weixinQrcode from '@/assets/Community/weixinQrcode.webp'
import shenwang from '@/assets/Community/shenwang.webp'
import mini from '@/assets/Community/mini.webp'
import { competitions, behavior } from './const'

const iconStyle = { fontSize: 64 }

// 按钮配置数据
const sciFiButtons = [
  { id: 1, label: 'Null Signal Games', icon: favicon0, isImg: true, color: '#00f3ff' },
  { id: 2, label: 'NetrunnerDB', icon: favicon1, isImg: true, color: '#ff00c8' },
  { id: 3, label: 'Always be Running', icon: favicon2, isImg: true, color: '#00ff9d' },
  { id: 4, label: 'Cobra', icon: favicon3, isImg: true, color: '#ff9d00' },
  { id: 5, label: 'Near Earth Hub', icon: favicon4, isImg: true, color: '#9d00ff' },
  { id: 6, label: `The Maker's Eye`, icon: favicon5, isImg: true, color: '#ff3864' },
  { id: 7, label: '矩阵潜袭QQ群', icon: <QqOutlined style={iconStyle} />, color: '#00aaff' },
  { id: 8, label: '矩阵潜袭微信群', icon: <WechatOutlined style={iconStyle} />, color: '#00ff6a' },
  { id: 9, label: '微信小程序', icon: <WechatOutlined style={iconStyle} />, color: '#ffcc00' },
  { id: 10, label: '深网补给池', icon: <RadarChartOutlined style={iconStyle} />, color: '#ff0058' },
  { id: 11, label: '组织比赛原则', icon: <WalletOutlined style={iconStyle} />, color: '#58ff00' },
  { id: 12, label: '社群行为准则', icon: <FileDoneOutlined style={iconStyle} />, color: '#aa00ff' },
];

// 复制到剪贴板函数
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    message.success('已复制客服微信号到剪贴板');
  }).catch(err => {
    console.error('复制失败: ', err);
  });
};
const COMMUNITY = () => {
  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState({})
  // 按钮点击处理函数
  const handleSciFiButtonClick = (id) => {
    console.log(`执行操作: ${id}`);

    switch (id) {
      case 1:
        window.open('https://nullsignal.games/', '_blank')
        break;
      case 2:
        window.open('https://netrunnerdb.com/', '_blank')
        break;
      case 3:
        window.open('https://alwaysberunning.net/', '_blank')
        break;
      case 4:
        window.open('https://tournaments.nullsignal.games/', '_blank')
        break;
      case 5:
        window.open('https://www.nearearthhub.net/', '_blank')
        break;
      case 6:
        window.open('https://makers-eye.com/', '_blank')
        break;
      case 7:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <div style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 400 }} src={QQQrcode} /></div>
        })
        break;
      case 8:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className='modal-text'>请添加客服微信获取入群链接： <a onClick={() => copyToClipboard('kainveus')}>kainveus</a></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: 400 }} src={weixinQrcode} /></div></>
        })
        break;
      case 9:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: 400 }} src={mini} /></div></>
        })
        break;
      case 10:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className='modal-text'>访问： <a onClick={() => window.open('https://docs.qq.com/sheet/DVVp1VmtkVUVQckh1?tab=a0a0bu', '_blank')}>深网补给池</a></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: 400 }} src={shenwang} /></div></>
        })
        break;
      case 11:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className="competition-content">
              {competitions.map((item) => (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ))}
            </div>
          </>
        })
        break;
      case 12:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className="competition-content">
              {behavior.map((item) => (
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              ))}
            </div>
          </>
        })
        break;
      default:
        return
    }
  };

  // 按钮网格渲染函数
  const renderSciFiButtonGrid = () => {
    return (
      <div className="sci-fi-button-grid">
        {sciFiButtons.map((button) => (
          <div
            key={button.id}
            className="sci-fi-button"
            style={{ background: `linear-gradient(180deg, ${button.color}, #ffffff00)` }}
            onClick={() => handleSciFiButtonClick(button.id)}
          >
            <div className="button-content">
              {button.isImg ? (
                <img src={button.icon} alt={button.label} className="button-icon" />
              ) : (
                <span className="button-icon">{button.icon}</span>
              )}
              <span className="button-label">{button.label}</span>
            </div>
            <div className="button-glow"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="doc-preview-container">
      <Modal
        width={['组织比赛原则', '社群行为准则'].includes(modalContent?.title) ? 1000 : 500}
        getContainer={() => document.getElementById('root')}
        title={modalContent.title}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={visible}
        wrapClassName="community-modal"
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {modalContent.content}
      </Modal>
      {/* 搜索栏 */}
      <div className="search-bar">
        {/* ...现有搜索栏代码... */}
      </div>

      {/* 科幻风格按钮网格 */}
      {renderSciFiButtonGrid()}

      {/* 文档主体（左侧导航 + 右侧内容） */}
      <div className="doc-main">
        {/* ...现有内容... */}
      </div>
    </div>
  );
}

export default COMMUNITY