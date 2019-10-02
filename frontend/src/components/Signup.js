import React, { Component } from 'react'
import AUTH_SERVICE from '../services/index'
import Button from '../components/Button/Button'
// import axios from 'axios'
import { MyContext } from '../context'
// import { Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    user: {
      username: '',
      email: '',
      role: '',
      placePreference: '',
      genres: '',
      image: '',
      description: '',
      contacts: '',
      booksRead: ''
    }
  }




  handleInput = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  onSubmit = e => {
    e.preventDefault()
    AUTH_SERVICE.signup(this.state.user)
      .then(response => {
        this.props.history.push('/login')
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { user } = this.state
    console.log(this.state.user)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className={{ width: '50vw' }}>
          <form onSubmit={this.onSubmit}>
            <div
              className="container sign-up-total"
              style={{
                display: 'flex',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="col-md-6"
                style={{
                  display: 'inline-block',
                  marginTop: '20px'
                }}
              >
                {/* Username */}
                <div className="form-group">
                  <h1>Sign up</h1>
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput">Username</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    name="username"
                    value={user.username}
                  />
                </div>
                {/* Email */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Email</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="email"
                    className="form-control"
                    onChange={this.handleInput}
                    name="email"
                    value={user.email}
                  />
                </div>
                {/* Password */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Password</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="password"
                    className="form-control"
                    onChange={this.handleInput}
                    value={user.password}
                    name="password"
                  />
                </div>

                {/* Role */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Role</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="role"
                    value={user.role}
                  />
                </div>

                {/* Place Preference*/}
                <div className="form-group">
                  <label for="formGroupExampleInput">Place Preference</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="placePreference"
                    value={user.placePreference}
                  />
                </div>

                {/* Image*/}
                <div className="form-group">
                  <label for="formGroupExampleInput">Image</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={user.image}
                  />
                </div>

                {/* Genres*/}
                <div className="form-group">
                  <label for="formGroupExampleInput">Genres</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="genres"
                    value={user.genres}
                  />
                </div>
              </div>
              <div
                className="col-md-4 offset-md-1"
                style={{
                  display: 'inline-block',
                  marginTop: '30px'
                }}
              >
                <div>
                  <h2>Hello!</h2>
                </div>
                <div>
                  <h4>Welcome to The Book Club</h4>
                </div>
                <div
                  className="text-container"
                  style={{
                    marginTop: '130px',
                    marginBottom: '50px',
                    height: '60px'
                  }}
                >
                  the place where you can meet all the book lovers near you.
                  Find your favorite place, find your new favorite book
                </div>

                <Button bg="black" htmlType="submit">
                  Create account
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Signup.contextType = MyContext

export default Signup
