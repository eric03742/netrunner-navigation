import { useState, useMemo } from 'react'
import { Modal, Tooltip } from 'antd'
import { RetweetOutlined } from '@ant-design/icons'
import { useModel } from 'umi'
import { DEEPNET_PACKS } from './manifest.js'
import style from './style.less'

// 判断图片是否横向（宽>高）
const checkLandscape = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img.width > img.height)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

const Deepnet = () => {
  const { isSmallScreen } = useModel('mobile')
  const { isPure } = useModel('isPure')

  // 当前查看的大图卡：null 或 { card, flipped }
  const [active, setActive] = useState(null)

  // 全局翻面：true 时所有缩略图翻到背面
  const [showAllBack, setShowAllBack] = useState(false)

  // 横向图片标记
  const [landscapeSet, setLandscapeSet] = useState(new Set())

  // 预检测所有图片方向
  useMemo(() => {
    const all = []
    DEEPNET_PACKS.forEach(p => p.cards.forEach(c => {
      if (c.front) all.push({ src: c.front, key: `f-${p.pack}-${c.index}` })
      if (c.back) all.push({ src: c.back, key: `b-${p.pack}-${c.index}` })
    }))
    Promise.all(all.map(async ({ src, key }) => ({ key, is: await checkLandscape(src) })))
      .then(results => {
        const set = new Set()
        results.forEach(r => { if (r.is) set.add(r.key) })
        setLandscapeSet(set)
      })
  }, [])

  const openCard = (card) => setActive({ card, flipped: showAllBack })
  const closeBig = () => setActive(null)
  const toggleFlip = () =>
    setActive((s) => (s ? { ...s, flipped: !s.flipped } : s))

  const toggleAllBack = () => setShowAllBack((v) => !v)

  const bigCard = active?.card
  const bigFlipped = active?.flipped
  const bigHasBack = !!bigCard?.back

  // 缩略图网格列数：移动端 3 列，桌面更密
  const gridClassName = useMemo(
    () =>
      [
        style.grid,
        isSmallScreen ? style.gridMobile : '',
        isPure ? style.gridPure : '',
      ]
        .filter(Boolean)
        .join(' '),
    [isSmallScreen, isPure]
  )

  const containerClassName = useMemo(
    () =>
      [
        style.container,
        isSmallScreen ? style.mobile : '',
        isPure ? style.pure : '',
      ]
        .filter(Boolean)
        .join(' '),
    [isSmallScreen, isPure]
  )

  return (
    <div className={containerClassName}>
      <header className={style.header}>
        <h1 className={style.title}>深网补给池</h1>
        <Tooltip title={showAllBack ? '切回正面' : '全部查看背面'}>
          <button
            className={`${style.flipAllBtn} ${showAllBack ? style.flipAllActive : ''}`}
            onClick={toggleAllBack}
            aria-label="全部翻面"
          >
            <RetweetOutlined />
            <span>{showAllBack ? '看正面' : '看背面'}</span>
          </button>
        </Tooltip>
      </header>

      {DEEPNET_PACKS.map((pack) => (
        <section key={pack.pack} className={style.packSection}>
          <h2 className={style.packTitle}>
            <span className={style.packTitleText}>{pack.title}</span>
            <span className={style.packCount}>{pack.cards.length} 张</span>
          </h2>

          <div className={gridClassName}>
            {pack.cards.map((card) => {
              const hasBack = !!card.back
              const thisFlipped = showAllBack && hasBack
              return (
                <div
                  key={`${pack.pack}-${card.index}`}
                  className={style.card}
                  onClick={() => openCard(card)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openCard(card)
                    }
                  }}
                >
                  <div className={`${style.cardInner} ${thisFlipped ? style.cardFlipped : ''}`}>
                    <div className={style.cardFront}>
                      <img
                        src={card.front}
                        alt={card.name || '变体卡'}
                        loading="lazy"
                        draggable={false}
                        data-landscape={landscapeSet.has(`f-${pack.pack}-${card.index}`) ? '1' : ''}
                      />
                    </div>
                    <div className={style.cardBack}>
                      {card.back ? (
                        <img
                          src={card.back}
                          alt={`${card.name || '变体卡'} 背面`}
                          loading="lazy"
                          draggable={false}
                          data-landscape={landscapeSet.has(`b-${pack.pack}-${card.index}`) ? '1' : ''}
                        />
                      ) : (
                        <div className={style.noBack}>背面暂无</div>
                      )}
                    </div>
                  </div>
                  <div className={style.cardLabel}>
                    <span className={style.cardName}>
                      {card.name || '（变体）'}
                    </span>
                    {card.count && card.name && (
                      <span className={style.cardCount}>{card.count}</span>
                    )}
                    {card.variant && (
                      <span className={style.variantTag}>变体</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      <Modal
        open={!!active}
        onCancel={closeBig}
        footer={null}
        closable
        destroyOnClose
        getContainer={() => document.getElementById('root')}
        wrapClassName={`${style.bigModal} ${isPure ? style.bigModalPure : ''}`}
        width={isSmallScreen ? '92vw' : 520}
        title={null}
      >
        {bigCard && (
          <div className={style.bigWrap}>
            <div
              className={style.bigcard}
              onClick={bigHasBack && !isSmallScreen ? toggleFlip : undefined}
              role={bigHasBack && !isSmallScreen ? 'button' : undefined}
              tabIndex={bigHasBack && !isSmallScreen ? 0 : undefined}
              aria-label={bigHasBack && !isSmallScreen ? '点击翻面' : undefined}
            >
              <div
                className={`${style.bigcardInner} ${bigFlipped ? style.bigcardFlipped : ''}`}
              >
                <div className={style.bigFront}>
                  <img
                    src={bigCard.front}
                    alt={bigCard.name || '变体卡'}
                    data-landscape={landscapeSet.has(`f-${active?.card?.pack}-${active?.card?.index}`) ? '1' : ''}
                  />
                </div>
                <div className={style.bigBack}>
                  {bigHasBack ? (
                    <img
                      src={bigCard.back}
                      alt="背面"
                      data-landscape={landscapeSet.has(`b-${active?.card?.pack}-${active?.card?.index}`) ? '1' : ''}
                    />
                  ) : (
                    <div className={style.noBackBig}>背面暂无</div>
                  )}
                </div>
              </div>
            </div>

            <div className={style.bigMeta}>
              <div className={style.bigName}>
                {bigCard.name || '（变体卡）'}
              </div>
              {bigCard.count && bigCard.name && (
                <div className={style.bigCount}>{bigCard.count}</div>
              )}
              {bigHasBack ? (
                <button
                  className={style.flipBtn}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFlip()
                  }}
                >
                  {bigFlipped ? '↻ 看正面' : '↻ 看背面'}
                </button>
              ) : (
                <div className={style.noFlipHint}>此卡无背面</div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Deepnet
