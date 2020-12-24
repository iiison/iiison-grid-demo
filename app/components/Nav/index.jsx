import React from 'react';

import { Button } from '$COMPONENTS'
import { Logo } from '$ICONS'
import styles from './styles.css'

const Nav = () => { 
  return ( 
    <div className={`grid ${styles.nav}`}>
      <div className='col-12 margin-bottom-s'>
        <div className='grid'>
          <Logo style={{transform: 'scale(0.8)'}} />
          <Button classes='to-right'>Login</Button>
          <Button type='primary' classes='margin-left-l'>Sign Up</Button>
        </div>
      </div>
      <nav className={`grid col-12`}>
        <ul className={`grid col-12 ${styles.navLinks}`}>
          <li className={styles.active}>Home</li>
          <li>RPG</li>
          <li>Arcade</li>
          <li>Brain Games</li>
          <li className='to-right'>Support</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav

