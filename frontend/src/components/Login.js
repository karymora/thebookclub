import React, { Component } from 'react'
// import { Card, Input, Form } from 'antd'
import AUTH_SERVICE from '../services/index'
import { MyContext } from '../context'
import Button from '../components/Button/Button'

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
        this.context.logUser(response.data)
        this.props.history.push('/profile')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
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
        <h2>Login</h2>

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
            <Button bg="black" htmlType="submit">
              LogIn
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

Login.contextType = MyContext

export default Login
