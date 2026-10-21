import './style.less';
import { QqOutlined, WechatOutlined, TeamOutlined, FileDoneOutlined, WalletOutlined, SaveOutlined, MobileOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { Modal, message } from 'antd'
import { useModel } from 'umi'
import favicon0 from '@/assets/Community/favicon0.png'
import favicon1 from '@/assets/Community/favicon1.png'
import favicon2 from '@/assets/Community/favicon2.png'
import favicon3 from '@/assets/Community/favicon3.ico'
import favicon4 from '@/assets/Community/favicon4.ico'
import favicon5 from '@/assets/Community/favicon5.ico'
import QQQrcode from '@/assets/Community/QQQrcode.webp'
import weixinQrcode from '@/assets/Community/weixinQrcode.webp'
import shenwang from '@/assets/Community/shenwang.webp'
import weixinMiniProgram from '@/assets/Community/weixinMiniProgram.webp';
import shenwangIcon from '@/assets/Community/shenwangIcon.webp';
import mini from '@/assets/Community/mini.webp'
import party from '@/assets/Community/party.webp'
import offical from '@/assets/Community/offical.webp'
import { competitions, behavior } from './const'

const iconStyle = { fontSize: 64 }

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
  const { isSmallScreen } = useModel('mobile');
  const iconStyle = { fontSize: isSmallScreen ? 32 : 64 }
  // 按钮配置数据
  // 配色方案：宝石色调（jewel tones）—— 按各按钮语义分配色相，
  // 统一 S=65% L=48%，饱和度与明度一致，整体协调不花，
  // 深色背景上既能看清又有质感。
  const sciFiButtons = [
    { id: 1, label: 'Null Signal Games', icon: favicon0, isImg: true, color: '#2bcaca' },
    { id: 2, label: 'NetrunnerDB', icon: favicon1, isImg: true, color: '#ca2bca' },
    { id: 3, label: 'Always be Running', icon: favicon2, isImg: true, color: '#2bca60' },
    { id: 4, label: 'Cobra', icon: favicon3, isImg: true, color: '#ca7a2b' },
    { id: 16, label: '国服 Cobra', icon: favicon3, isImg: true, color: '#caa22b' },
    { id: 6, label: `The Maker's Eye`, icon: favicon5, isImg: true, color: '#ca2b2b' },
    { id: 5, label: 'Near Earth Hub', icon: favicon4, isImg: true, color: '#6d2bca' },
    { id: 7, label: '矩阵潜袭QQ群', icon: <QqOutlined style={iconStyle} />, color: '#2b7aca' },
    { id: 13, label: '微信公众号', icon: <i className='icon icon-click' style={iconStyle}></i>, color: '#452bca' },
    { id: 8, label: '矩阵潜袭微信群', icon: <WechatOutlined style={iconStyle} />, color: '#2bca95' },
    { id: 9, label: '微信小程序', icon: <img src={weixinMiniProgram} style={iconStyle} />, color: '#caaf2b' },
    { id: 14, label: '约局联系人', icon: <TeamOutlined style={iconStyle} />, color: '#7aca2b' },
    { id: 10, label: '深网补给池', icon: <img src={shenwangIcon} style={iconStyle} />, color: '#ca2b60' },
    { id: 11, label: '组织比赛原则', icon: <WalletOutlined style={iconStyle} />, color: '#2bca2b' },
    { id: 12, label: '社群行为准则', icon: <FileDoneOutlined style={iconStyle} />, color: '#952bca' },
    { id: 15, label: 'Stack存储栈', icon: <SaveOutlined style={iconStyle} />, color: '#ca2b88' },
    { id: 17, label: 'Jinteki移动端插件', icon: <MobileOutlined style={iconStyle} />, color: '#2b6dca' },
  ];

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
      case 16:
        window.open('https://cobra.sneakdoorbeta.net', '_blank')
        break;
      case 17: {
        const a = document.createElement('a');
        a.href = '/jinteki-mobile.user.js';
        a.download = 'Jinteki Mobile.user.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        message.success('开始下载 Jinteki 移动端插件');
        break;
      }
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
      case 13:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className='modal-text'>微信公众号搜索：矩阵潜袭</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: 400 }} src={offical} /></div>
          </>
        })
        break;
      case 14:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className='modal-text'>访问： <a onClick={() => window.open('https://docs.qq.com/sheet/DVUdhU2N3ZFhJQXNS?is_no_hook_redirect=1&tab=BB08J2', '_blank')}>线下约局联系表格</a></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: 400 }} src={party} />
            </div>
          </>
        })
        break;
      case 15:
        setVisible(true)
        setModalContent({
          title: sciFiButtons.find(item => item.id === id).label,
          content: <>
            <div className='modal-text'>访问： <a onClick={() => window.open('https://pan.baidu.com/s/1NJGKhyD7CKFWBTpiLi7BAg?pwd=kaom', '_blank')}>百度网盘</a></div>
            <div className='modal-text'>提取码：kaom</div>
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
            style={{
              '--button-color': button.color,
              background: `linear-gradient(180deg, ${button.color}cc, rgba(20, 25, 35, 0.9))`,
            }}
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
    <div className="COMMUNITY">
      <Modal
        width={['组织比赛原则', '社群行为准则'].includes(modalContent?.title) ? 1000 : 500}
        getContainer={() => document.getElementById('root')}
        title={modalContent.title}
        open={visible}
        wrapClassName="community-modal"
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {modalContent.content}
      </Modal>
      {/* 科幻风格按钮网格 */}
      {renderSciFiButtonGrid()}
    </div>
  );
}

export default COMMUNITY