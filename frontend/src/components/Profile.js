import React, { Component } from 'react'
import { MyContext } from '../context'
// import Button from '../components/Button/Button'
// import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

class Profile extends Component {
  state = {
    user: {
      username: '',
      email: '',
      genres: '',
      description: '',
      contacts: []
    }
  }

  componentDidMount() {
    if (!this.context.state.loggedUser)
      return this.props.history.push('/login', { new: true })
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
    const { id } = this.props.match.params
    console.log('>>>>>' + user.user._id)
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
            <Link to={`/allusers/edit/${user.user._id}`}>
              <Button bg="black">Edit Profile</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Profile.contextType = MyContext

export default Profile
