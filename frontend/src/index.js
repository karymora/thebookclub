import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Router'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import 'bulma/css/bulma.css'
import MyProvider from './context/index'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <MyProvider>
    <Router />
  </MyProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
