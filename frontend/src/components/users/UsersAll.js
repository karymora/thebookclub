import React, { Component } from 'react'
import { Card, Icon, Form } from 'antd'
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

  deleteUser = id => {
    axios
      .delete(`http://localhost:3000/users/allusers/${id}`)
      .then(response => {
        this.setState(prevState => {
          return {
            ...prevState,
            users: prevState.users.filter(e => e._id !== response.data.user._id)
          }
        })
      })
      .catch(err => console.log(err))
  }

  editUser = id => {
    this.props.history.push(`/allusers/edit/${id}`)
  }

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
          // <div className="user-container col-md-4 offset-md-4" key={i}>
          //   <div className="container">{user.email}</div>
          // </div>

          <Card
            title={user.username}
            actions
            key={user._id}
            style={{ width: '25%' }}
            cover={
              <img
                src={user.image}
                alt={user.username}
                height="500px"
                onClick={() =>
                  this.props.history.push(`/allusers/users/${user._id}`)
                }
              />
            }
            actions={[
              <Icon
                type="delete"
                key="delete"
                onClick={() => this.deleteUser(user._id)}
              />,
              <Icon
                type="edit"
                key="edit"
                onClick={() => this.editUser(user._id)}
              />
            ]}
          ></Card>
        ))}
      </div>
    )
  }
}
