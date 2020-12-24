import React from 'react';

import { Logo } from '$ICONS'
import styles from './styles.css'

const Nav = () => { 
  return ( 
    <div className={`grid ${styles.nav}`}>
      <div className='col-12 grid'>
        <Logo />
      </div>
      <nav className={`grid col-12`}>
        <ul className={`grid col-12 ${styles.navLinks}`}>
          <li className={styles.active}>Home</li>
          <li>RPG</li>
          <li>Arcade</li>
          <li>Brain Games</li>
          <li className={styles.toRight}>Support</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

