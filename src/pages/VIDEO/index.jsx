import { useState } from 'react'
import { Image, Modal } from 'antd'
import { useModel } from 'umi'
import { videoList } from './const.js'
import style from './style.less'

const Video = () => {
  const [playBvid, setPlayBvid] = useState('')
  const { isSmallScreen } = useModel('mobile')

  const playerSrc = playBvid
    ? `https://player.bilibili.com/player.html?bvid=${playBvid}&page=1&high_quality=1&autoplay=1&danmaku=0&as_wide=1`
    : ''

  const closeModal = () => setPlayBvid('')

  return (
    <div className={style.container}>
      {videoList.map((video, index) => (
        <div
          key={index}
          className={style.imageWrapper}
          onClick={() => setPlayBvid(video.bvid)}
        >
          <Image
            src={video.img}
            alt={video.name}
            preview={false}
            style={{ borderRadius: '6px', cursor: 'pointer' }}
          />
          <div className={style.playOverlay} aria-hidden="true">
            <span className={style.playIcon} />
          </div>
          <div className={style.videoTitle}>
            {video.name}
          </div>
        </div>
      ))}

      <Modal
        open={!!playBvid}
        onCancel={closeModal}
        footer={null}
        closable
        destroyOnClose
        getContainer={() => document.getElementById('root')}
        wrapClassName={style.videoModal}
        width={isSmallScreen ? undefined : 800}
        title={null}
      >
        {playBvid && (
          <iframe
            src={playerSrc}
            title="bilibili-player"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
            className={style.playerFrame}
            style={{
              width: isSmallScreen ? '-webkit-fill-available' : '100%',
              height: isSmallScreen ? 260 : 450,
              border: 0
            }}
          />
        )}
      </Modal>
    </div>
  )
}

export default Video
