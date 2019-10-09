import React, { Component } from 'react'
import { MyContext } from '../context'
// import Button from '../components/Button/Button'
// import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar/StyledSidebar'
import { Link } from 'react-router-dom'
import Button from '../components/Button/SimpleButton'
import DetailCard from './Cards/DetailCard'
import StyledNavbar from '../components/Navbar/StyledNavbar'

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
    // console.log(userinfo)
  }

  logout() {
    localStorage.clear()
    this.props.history.push(`/`)
  }

  render() {
    const user = this.state.user
    const booksRead = user.booksRead

    // const { id } = this.props.match.params
    // console.log('>>>>>' + user)
    // console.log('a verrrrr los libros ' + booksRead)
    // booksRead.map(oneBook => {
    //   console.log('1', oneBook)
    // })

    return (
      <div>
        <StyledNavbar></StyledNavbar>
        <div className="profile-all">
          <div className="theSideBar">
            <Sidebar style={{ backgroundImage: `url(${user.image})` }} />
          </div>
          <div className="profile-info-container">
            <div className="container">
              <div className="welcome-user">
                <p className="header2">Welcome!!</p>
                <p className="header2">{user.username}</p>
              </div>
              <hr></hr>
              <div className="button-container">
                <div className="buttonaligns">
                  <Link to={`/allusers/edit/${user._id}`}>
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
                  <Link to={`/all-users`}>
                    <Button border="black" color="black">
                      Search friends
                    </Button>
                  </Link>
                </div>

                <hr></hr>
              </div>
              <div className="profile-info-2">
                <p className="header3">Genres</p>
                <p className="thesubtitles">{user.genres}</p>
                {/* <div className="the-assistants">
              <img src={bookread.imageBook} alt={'bookread.title'} />
              </div> */}
              </div>

              <div className="profile-info-2">
                <p className="header3">Books Read </p>

                {booksRead.map((bookread, i) => (
                  <div className="the-assistants" key={i}>
                    <div className="assistant-image">
                      <img src={bookread.imageBook} alt={'bookread.title'} />
                    </div>
                    <div className="assistant-name">{bookread.title}</div>
                  </div>
                ))}
              </div>

              {/* <div className="profile-info-2">
              <p className="title is-2 is-spaced">Email</p>
              <p className="subtitle is-4">{user.user.email}</p>
            </div>  */}
              <div className="profile-info-2">
                <p className="header3">BookClub</p>
                <p className="thesubtitles">
                  <DetailCard>BookClub pending</DetailCard>
                </p>
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
      </div>
    )
  }
}

Profile.contextType = MyContext

export default Profile
