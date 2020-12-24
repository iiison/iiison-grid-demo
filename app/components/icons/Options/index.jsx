import React from 'react'
import { PropTypes } from 'prop-types'

const Options = ({ fill = '#ffffff', classes }) => {
  return (
    <svg width='25' height='25' xmlns='http://www.w3.org/2000/svg' className={classes}>
      <g>
        <rect fill='none' id='canvas_background' height='602' width='802' y='-1' x='-1'/>
      </g>
      <g>
        <g id='TabBar-Icons' fillRule='evenodd' fill='none'>
          <g id='Hamburger' fill={fill}>
            <path id='svg_1' d='m0,2l25,0l0,4l-25,0l0,-4zm0,8l25,0l0,4l-25,0l0,-4zm0,8l25,0l0,4l-25,0l0,-4z'/>
          </g>
        </g>
      </g>
    </svg>
  )
}

Options.propTypes = {
  fill    : PropTypes.string,
  classes : PropTypes.string
}

export default Options

