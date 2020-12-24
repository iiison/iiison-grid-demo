import React             from 'react'
import ReactDOM          from 'react-dom'
import { Provider }      from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store  from '$CONFIGS/store'
import routes from '$CONFIGS/routes'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  </Provider>, document.getElementById('root')
)

