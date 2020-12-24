import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Test2 from '$COMPONENTS/Test2'

import {
  Nav
} from '$COMPONENTS'

const routes = () => (
  <div className='app grid'>
    <div className='col'>
      <Nav />
      <Nav isMini={true} />
      <Switch>
        <Route exact path='/' component={Test2} />
        <Route exact path='/test-2' component={Test2} />
      </Switch>
    </div>
  </div>
)

export default routes

