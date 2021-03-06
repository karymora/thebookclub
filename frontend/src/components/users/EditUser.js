import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import AUTH_SERVICE from '../../services/index'

class EditUser extends Component {
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

  componentDidMount() {
    //let { user } = this.state
    const { id } = this.props.match.params
    axios
      .get(`https://shielded-badlands-63465.herokuapp.com/users/allusers/${id}`)
      .then(response => {
        this.setState(prevState => {})
      })
      .catch(err => console.log(err))
  }

  handleInput = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  onSubmit = e => {
    e.preventDefault()
    // let { user, form } = this.state
    let { user } = this.state
    const { id } = this.props.match.params
    axios
      .put(`https://shielded-badlands-63465.herokuapp.com/users/allusers/${id}`, user)
      .then(({ data }) => {
        // console.log(data)
        this.setState({
          user: {
            //   username: '',
            //   email: '',
            //   role: '',
            //   placePreference: '',
            //   genres: '',
            //   image: '',
            //   description: '',
            //   contacts: '',
            //   booksRead: ''
          }
        })
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log(error)
      })
  }

  submitEditForm = async e => {
    try {
      e.preventDefault()
      const response = await AUTH_SERVICE.edit(this.state.user)
      this.setState({ user: this.state.user })
      // console.log(response.data)
      this.props.history.push('/perfil')
    } catch (error) {
      console.log(error)
    }

    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true
      })
    } else {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    const { user } = this.state
    // console.log(user.id)
    // console.log(this.props)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' +
            ')'
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
                style={{
                  backgroundColor: 'white',
                  padding: '100px'
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
                    <div className="header3">Edit User</div>
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
                    <div className="header3">Hello!</div>
                  </div>
                  <div>
                    <h4>Please change your info</h4>
                  </div>
                  <div
                    className="text-container"
                    style={{
                      marginTop: '130px',
                      marginBottom: '50px',
                      height: '60px'
                    }}
                  ></div>

                  <Button bg="black" htmlType="submit">
                    Edit user
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditUser
