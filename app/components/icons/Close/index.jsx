import React from 'react'
import { PropTypes } from 'prop-types'

const Close = ({ fill = '#ffffff', classes, onClick }) => {
  return (
    <svg width='66' height='66' xmlns='http://www.w3.org/2000/svg' className={classes} onClick={onClick}>
      <g>
        <g id='Icon-Close' transform='translate(381.000000, 231.000000)'>
          <polyline className='st0' fill={fill} id='Fill-16' points='-370.7,-174.7 -373,-177 -327,-223 -324.7,-220.7 -370.7,-174.7    '/>
          <polyline className='st0' fill={fill} id='Fill-17' points='-327,-174.7 -373,-220.7 -370.7,-223 -324.7,-177 -327,-174.7    '/>
        </g>
      </g>
    </svg>
  )
}

Close.propTypes = {
  fill    : PropTypes.string,
  classes : PropTypes.string,
  onClick : PropTypes.func
}

export default Close

