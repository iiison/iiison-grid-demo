import React from 'react'
import { PropTypes } from 'prop-types'

import { Button } from '$COMPONENTS'
import styles from './styles.css'

const GridItem = ({ children, imageUrl, size }) => {
  const sizeClass = styles[`span_${size}`]

  return (
    <div className={`${styles.gridItem} ${sizeClass} grid-middle`}>
      <img className={styles.heroImg} src={imageUrl} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

GridItem.propTypes = {
  children : PropTypes.node,
  imageUrl : PropTypes.string,
  size     : PropTypes.oneOf(['1_1', '1_2', '2_1', '2_2'])
}

const Home = () => {
  return (
    <div className={`grid ${styles.homeGrid}`}>
      <GridItem size='2_2' imageUrl='https://i.imgur.com/yJAsBlY.jpg'>
        <div className={`grid-middle grid-center full-height t-upper`}>
          <div>
            <p className={`${styles.headingXL}`}>Play<br />Win<br /> Excite</p>
            <Button type='primary'>Get Started!</Button>
          </div>
        </div>
      </GridItem>
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_2' imageUrl='https://i.imgur.com/yJAsBlY.jpg'>
        <div className={`grid-middle grid-center full-height t-upper`}>
          <p className={`${styles.headingL}`}>Live Games<br />With Friends</p>
        </div>
      </GridItem>
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg' />
      <GridItem size='1_1' imageUrl='https://i.imgur.com/yJAsBlY.jpg'>
        <div className={`grid-middle grid-center full-height t-upper`}>
          <p className={`${styles.headingL}`}>Esports</p>
        </div>
      </GridItem>
      <GridItem size='1_2' imageUrl='https://i.imgur.com/yJAsBlY.jpg'>
        <div className={`grid-middle grid-center full-height t-upper`}>
          <div className='col grid-center'>
            <p className={`${styles.heading}`}>Love Playing?<br />Join the League</p>
            <a href='#' className={`t-right t-capitalize ${styles.applyLink}`}>Apply Now!</a>
          </div>
        </div>
      </GridItem>
    </div>
  )
}

export default Home

