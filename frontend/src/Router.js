import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/home/Home'
import ReadingGroup from './components/ReadingGroup'
import Place from './components/Place'
import Meeting from './components/Meeting'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/group" component={ReadingGroup} />
      <Route exact path="/place" component={Place} />
      <Route exact path="/meeting" component={Meeting} />
    </Switch>
  </BrowserRouter>
)

export default Router
