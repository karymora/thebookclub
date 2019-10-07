import React, { Component } from 'react'
// import { Card, Input, Form } from 'antd'
import AUTH_SERVICE from '../services/index'
import { MyContext } from '../context'
import Button from '../components/Button/LoggedButton'
import { Link } from 'react-router-dom'

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
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
    AUTH_SERVICE.login(this.state.user)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.context.logUser(response.data)
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log(error)
      })
  }
  // onSubmit = e => {
  //   e.preventDefault()
  //   AUTH_SERVICE.login(this.state.user)
  //     .then(response => {
  //       localStorage.setItem('user', JSON.stringify(response.data.user))
  //       if (response.data.user === 'user') {
  //         this.props.history.push('/profile')
  //       } else {
  //         this.props.history.push('/login')
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  render() {
    console.log(this.state.user)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundImage:
            'url(' + 'https://source.unsplash.com/zeH-ljawHtg/1600x900' + ')',
          justifyContent: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className="login-Card">
          <div className="header">
            <h2>Login</h2>
          </div>
          <div className={{ width: '50vw' }}>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Username</label>
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
                  placeholder="Username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Password</label>
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
                  name="password"
                  placeholder="Password"
                />
              </div>
              <Button
                bg="transparent"
                htmlType="submit"
                border="black"
                color="black"
              >
                LogIn
              </Button>
              <div className="helper-text">
                Don't have an account? Please{' '}
                <b>
                  <Link to={`/signup`}>sign up</Link>{' '}
                </b>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextType = MyContext

export default Login
