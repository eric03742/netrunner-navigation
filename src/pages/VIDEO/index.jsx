import style from './style.less'
import { videoList } from './const.js'
import { Image } from 'antd'

const Video = () => {
  return (
    <div className={style.container}>
      {videoList.map((video, index) => (
        <div
          key={index}
          className={style.imageWrapper}
          onClick={() => window.open(video.url, '_blank')}
        >
          <Image
            src={video.img}
            alt={video.name}
            preview={false}
            style={{ borderRadius: '6px', cursor: 'pointer' }}
          />
          <div style={{
            color: '#00ffff',
            marginTop: '10px',
            textAlign: 'center',
            textShadow: '0 0 8px rgba(0, 255, 255, 0.7)',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '16px'
          }}>
            {video.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Video