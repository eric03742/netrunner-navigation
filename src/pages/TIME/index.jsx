import style from './style.less'
import runTime from '@/assets/Time/runTime.webp'
import turnTime from '@/assets/Time/turnTime.webp'
import { Image } from 'antd'
import { useState } from 'react'

const Time = () => {
  const [hoveredImg, setHoveredImg] = useState(null)

  const handleMouseEnter = (imgName) => {
    setHoveredImg(imgName)
  }

  const handleMouseLeave = () => {
    setHoveredImg(null)
  }

  return (
    <div className={style.container}>
      <div
        className={`${style.imageWrapper} ${hoveredImg === 'left' ? style.imageHover : ''}`}
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={runTime} preview={false} />
      </div>
      <div
        className={`${style.imageWrapper} ${hoveredImg === 'right' ? style.imageHover : ''}`}
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={turnTime} preview={false} />
      </div>
    </div>
  )
}

export default Time