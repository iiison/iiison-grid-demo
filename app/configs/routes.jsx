import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from '$SCREENS'
import { Nav } from '$COMPONENTS'

const routes = () => (
  <div className='app grid'>
    <div className='col'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </div>
)

export default routes

