import React, { useState } from 'react'

import Nav from './Nav'

const handleOptionsClick = ( toggleNav ) => (state) => () => toggleNav(state)

const MainNav = () => {
  const [ navState, toggleNav ] = useState(true)
  const mainNavProps = {
    navState,
    toggleNav : handleOptionsClick(toggleNav)(true)
  }
  const miniNavProps = {
    isMini : true,
    toggleNav : handleOptionsClick(toggleNav)(false)
  }

  return (
    <>
      <Nav {...mainNavProps} />
      <Nav {...miniNavProps} />
    </>
  )
}

export default MainNav

