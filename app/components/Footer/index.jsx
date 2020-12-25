import React from 'react'
import { PropTypes } from 'prop-types'

import { Logo } from '$ICONS'
import styles from './styles.css'

const FooterLinks = ({ list }) => {

  return (
    <ul className='grid'>
      {list.map(({ name }) => (<li className='col-12' key={name}>{name}</li>))}
    </ul>
  )
}

FooterLinks.propTypes = {
  list : PropTypes.array
}

const Footer = () => { 
  const firstColLinks = [
    { name : 'Contact Us', },
    { name : 'Help Center', }, 
    { name : 'The Group', },
    { name : 'Affiliates', }
  ]
  const secondColLinks = [
    { name : 'Information', },
    { name : 'Terms and Conditions', }, 
    { name : 'Payment Methods', },
    { name : 'Bonus Terms', },
    { name : 'Responsible Gaming', }
  ]

  return (
    <footer className={`${styles.footer} grid`}>
      <div className={`col-12 ${styles.footerCont}`}>
        <div className='grid'>
          <div className={`col-2 ${styles.linksCol} ${styles.logoCont}`}>
            <Logo style={{transform: 'scale(0.8) translateX(-15px)'}} />
          </div>
          <div className={`col-2 ${styles.linksCol}`}>
            <FooterLinks list={firstColLinks} />
          </div>
          <div className={`col-2 ${styles.linksCol}`}>
            <FooterLinks list={secondColLinks} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

