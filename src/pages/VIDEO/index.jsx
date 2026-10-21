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
          onClick={() => window.open(`https://www.bilibili.com/video/${video.bvid}`, '_blank')}
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
    </div>
  )
}

export default Video
