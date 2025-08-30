import styles from './style.less';
import { useState, useEffect } from 'react';
import weyland from '@/assets/Faction/NISEI_WEYLAND.svg';
import nbn from '@/assets/Faction/NISEI_NBN.svg';
import hassBioroid from '@/assets/Faction/NISEI_HB.svg';
// import jinteki from '@/assets/Faction/NISEI_JINTEKI.svg';
import jinteki from '@/assets/Faction/NISEI_JINTEKI.png';
import anarch from '@/assets/Faction/NISEI_ANARCH.svg';
import shaper from '@/assets/Faction/NISEI_SHAPER.svg';
import criminal from '@/assets/Faction/NISEI_CRIMINAL.svg';

const FactionList = [
  { name: '威兰财团', subTitle: 'WEYLAND CONSORTIUM', img: weyland },
  { name: '网际传媒', subTitle: 'NBN', img: nbn },
  { name: '哈斯生化', subTitle: 'HASS-BIOROID', img: hassBioroid },
  { name: '人间会社', subTitle: 'JINTEKI', img: jinteki },
  { name: '反叛者', subTitle: 'ANARCH', img: anarch },
  { name: '塑造者', subTitle: 'SHAPER', img: shaper },
  { name: '逆法者', subTitle: 'CRIMINAL', img: criminal },
]

const FACTION = () => {
  const [currentSelected, setCurrentSelected] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (item, e) => {
    setHoveredItem(item)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <div className={styles.faction}>
      <div className={styles.list}>
        <div className={styles.listContent}>
          {FactionList?.map(item => (
            <div
              className={currentSelected === item.subTitle ? styles['item-selected'] : styles.item}
              key={item.subTitle}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`${styles.title} ${hoveredItem === item ? styles.titleHover : ''}`}
              >
                {item.name}
              </span>
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
      <div className={styles.content}>

      </div>
    </div>
  )
}

export default FACTION