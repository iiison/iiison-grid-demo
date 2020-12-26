import React from 'react'
import { PropTypes } from 'prop-types'

import { Button } from '$COMPONENTS'
import styles from './styles.css'
import data from './data.json'

const GridItem = ({
  size,
  link,
  imgUrl,
  button,
  content,
  children,
}) => {
  const sizeClass = styles[`span_${size}`]
  let contentClasses = ''

  if (content) {
    const contentSizeClassName = `heading${content.size.toUpperCase()}`
    contentClasses = `${styles[contentSizeClassName]} ${content.shouldCenter && 't-center'}`
  }

  return (
    <div className={`${styles.gridItem} ${sizeClass} grid-middle`}>
      <img className={styles.heroImg} src={imgUrl} />
      <div className={styles.content}>
        {children}
        {content && (
          <div className={`grid-middle grid-center full-height t-upper`}>
            <div>
              {content.text.split('\n').map(text => (
                <p className={`${contentClasses}`} key={text}>{text}</p>)
              )}
              {button && <Button type='primary'>{button.text}</Button>}
            </div>
            {link && (
              <a href={link.url} className={`t-right t-capitalize col-12 ${styles.applyLink}`}>{link.text}</a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

GridItem.propTypes = {
  children : PropTypes.node,
  imgUrl   : PropTypes.string.isRequired,
  size     : PropTypes.oneOf(['1_1', '1_2', '2_1', '2_2']).isRequired,
  content  : PropTypes.shape({
    text : PropTypes.string,
    shouldCenter : PropTypes.bool,
    size : PropTypes.oneOf(['xl', 'l', 's']),
  }),
  button : PropTypes.shape({
    text : PropTypes.string
  }),
  link : PropTypes.shape({
    url  : PropTypes.string,
    text : PropTypes.string
  })
}

const Home = () => {
  return (
    <div className={`grid ${styles.homeGrid}`}>
      {data.map((gridItemData, index) => <GridItem key={index} {...gridItemData} /> )}
    </div>
  )
}

export default Home

