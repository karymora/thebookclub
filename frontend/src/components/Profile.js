import React, { Component } from 'react'
import { MyContext } from '../context'
// import Button from '../components/Button/Button'
// import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar/StyledSidebar'
import { Link } from 'react-router-dom'
import Button from '../components/Button/SimpleButton'
import DetailCard from './Cards/DetailCard'

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

  logout() {
    localStorage.clear()
    window.location.href = '/'
  }

  render() {
    const user = this.state
    const { id } = this.props.match.params
    console.log('>>>>>' + user.user._id)
    return (
      <div>
        <Sidebar style={{ backgroundImage: `url(${user.user.image})` }} />

        <div className="profile-info-container">
          <div className="container">
            <div className="container">
              <p className="title is-1">Welcome!!</p>
              <p className="subtitle is-3">{user.user.username}</p>
            </div>
            <div className="button-container">
              <div className="buttonaligns">
                <Link to={`/allusers/edit/${user.user._id}`}>
                  <Button border="black" color="black">
                    Edit Profile
                  </Button>
                </Link>
              </div>
              <div className="buttonaligns">
                <Link to={`/all-books`}>
                  <Button border="black" color="black">
                    Add Books
                  </Button>
                </Link>
              </div>
              <div className="buttonaligns">
                <Link to={`/allmeetings`}>
                  <Button border="black" color="black">
                    Join meeting
                  </Button>
                </Link>
              </div>
            </div>
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Genres</p>
              <p className="subtitle is-4">{user.user.genres}</p>
            </div>
            {/* <div className="profile-info-2">
              <p className="title is-2 is-spaced">Email</p>
              <p className="subtitle is-4">{user.user.email}</p>
            </div> */}
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">BookClub</p>
              <DetailCard>Holi!</DetailCard>
            </div>

            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Books Read </p>
              <p className="subtitle is-4">here :)</p>
              {/* <DetailCard></DetailCard> */}
            </div>
            <div className="profile-info-2">
              <p className="title is-2 is-spaced">Bookfriends</p>
              <p className="subtitle is-4">
                <DetailCard>Holi!</DetailCard>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profile.contextType = MyContext

export default Profile
