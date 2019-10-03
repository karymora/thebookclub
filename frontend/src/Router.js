import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/home/Home'
import UsersAll from './components/users/UsersAll'
import ReadingGroup from './components/ReadingGroup'
import Place from './components/Place'
import Meeting from './components/Meeting'
import UserDetail from './components/users/UserDetail'
import CreateBooks from './components/Books/CreateBooks'
// import EditUser from './components/users/EditUser'

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
      <Route exact path="/all-users" component={UsersAll} />
      <Route exact path="/all-users/:id" component={UserDetail} />
      <Route exact path="/addbook" component={CreateBooks} />
      {/* <Route exact path="/all-users/edit/:id" component={EditUser} /> */}
    </Switch>
  </BrowserRouter>
)

export default Router
