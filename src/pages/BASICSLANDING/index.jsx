import './style.less';
import { RobotOutlined, ReadOutlined, HddOutlined, BuildOutlined, WalletOutlined } from '@ant-design/icons'
import { history } from 'umi';

const BASICSLANDING = () => {
  const handleButtonClick = (buttonName) => {
    switch (buttonName) {
      case 1:
        window.open('https://tutorial.sneakdoorbeta.net/', '_blank')
        break;
      case 2:
        history.push(`/#BEGINNER`);
        break;
      case 3:
        history.push('/#TUTORIAL');
        break;
      case 4:
        history.push('/#TIME');
        break;
      case 5:
        history.push('/#DECK');
        break;
      default:
        history.push('/#BEGINNER');
    }
  };

  return (
    <div className="basics-landing">
      <div className="button-container">
        <button
          className="tech-button tech-button-1"
          onClick={() => handleButtonClick(1)}
        >
          <RobotOutlined />
          <span>人机对战</span>
        </button>
        <button
          className="tech-button tech-button-2"
          onClick={() => handleButtonClick(2)}
        >
          <BuildOutlined />
          <span>新手指南</span>
        </button>
        <button
          className="tech-button tech-button-3"
          onClick={() => handleButtonClick(3)}
        >
          <ReadOutlined />
          <span>教学剧本</span>
        </button>
        <button
          className="tech-button tech-button-4"
          onClick={() => handleButtonClick(4)}
        >
          <HddOutlined />
          <span>时序图</span>
        </button>
        <button
          className="tech-button tech-button-5"
          onClick={() => handleButtonClick(5)}
        >
          <WalletOutlined />
          <span>新手预组</span>
        </button>
      </div>
    </div>
  );
};

export default BASICSLANDING;