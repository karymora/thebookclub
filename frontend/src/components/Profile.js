import React, { Component } from 'react'
import { MyContext } from '../context'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Description from './Description/Description'

class Profile extends Component {
  state = {
    user: {
      username: '',
      email: '',
      genres: '',
      description: '',
      contacts: {}
    }
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userinfo = this.context.state.loggedUser
    this.setState(userinfo)
    console.log(userinfo)
  }

  // logout() {
  //   localStorage.clear()
  //   window.location.href = '/'
  // }

  render() {
    const user = this.state
    return (
      <div>
        <Sidebar />

        <div className="profile-info-container">
          <div className="container">
            <div className="container">
              <p className="title is-1">Welcome!!</p>
              <p className="subtitle is-3">{user.user.username}</p>
            </div>
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Genres</p>
              <p className="subtitle is-4">{user.user.genres}</p>
            </div>
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Email</p>
              <p className="subtitle is-4">{user.user.email}</p>
            </div>
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Description</p>
              <p className="subtitle is-4">{user.user.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.contextType = MyContext

export default Profile
