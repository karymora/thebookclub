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
      contacts: [],
      booksRead: []
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
    const booksRead = this.state.user.booksRead
    // const { id } = this.props.match.params
    console.log('>>>>>' + user.user._id)
    console.log('a verrrrr los libros ' + this.state.user.booksRead)

    return (
      <div className="profile-all">
        <div className="theSideBar">
          <Sidebar style={{ backgroundImage: `url(${user.user.image})` }} />
        </div>
        <div className="profile-info-container">
          <div className="container">
            <div className="welcome-user">
              <p className="header2">Welcome!!</p>
              <p className="header2">{user.user.username}</p>
            </div>
            <hr></hr>
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
              <div className="buttonaligns">
                <Link to={`/searchfriends`}>
                  <Button border="black" color="black">
                    Search friends
                  </Button>
                </Link>
              </div>

              <hr></hr>
            </div>
            <div className="profile-info-2">
              <p className="header3">Genres</p>
              <p className="thesubtitles">{user.user.genres}</p>
            </div>
            {/* {/* <div className="profile-info-2">
              <p className="title is-2 is-spaced">Email</p>
              <p className="subtitle is-4">{user.user.email}</p>
            </div> */}
            {/* <div className="profile-info-2">
              <p className="title is-2 is-spaced">BookClub</p>
              <DetailCard>BookClub pending</DetailCard>
            </div> */}
            <div className="profile-info-2">
              <p className="header3">Books Read </p>

              {booksRead.map((bookread, i) => (
                <div className="the-assistants" key={i}>
                  <div>
                    <p>{bookread.image}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="profile-info-2">
              <p className="header3">Bookfriends</p>
              <p className="thesubtitles">
                <DetailCard>Friendships</DetailCard>
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
