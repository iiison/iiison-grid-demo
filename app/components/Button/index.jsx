import React from 'react';
import { PropTypes } from 'prop-types'

import styles from './styles.css'

const Button = ({ type = 'normal', children, classes = '' }) => {
  const buttonCustomClass = styles[type]

  return (
    <button className={`${buttonCustomClass} ${styles.button} ${classes}`}>{children}</button>
  )
}

Button.propTypes = {
  classes  : PropTypes.string,
  type     : PropTypes.oneOf(['normal', 'primary']),
  children : PropTypes.node
}

export default Button

