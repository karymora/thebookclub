import React, { Component } from 'react'
// import { Card, Icon } from 'antd'
import axios from 'axios'
// const User = require('../models/User')

export default class UsersAll extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/users/allusers')
      .then(response => {
        this.setState({ users: response.data.user })
        console.log(this.state.users)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // deleteUser = id => {
  //   axios
  //     .delete(`http://localhost:3000/users/allusers/${id}`)
  //     .then(({ data }) => {
  //       this.setState(prevState => {
  //         return {
  //           ...prevState,
  //           users: prevState.users.filter(e => e._id !== data.user._id)
  //         }
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  // editUser = id => {
  //   this.props.history.push(`/allusers/edit/${id}`)
  // }

  render() {
    let { users } = this.state
    console.log(users)
    console.log('si estoy entrando!')
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100vh'
        }}
      >
        {users.map((user, i) => (
          <div className="col-md-4 offset-md-4" key={i}>
            <div className="container">{user.email}</div>
          </div>
        ))}
      </div>
    )
  }
}
