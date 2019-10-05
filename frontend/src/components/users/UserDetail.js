import React, { Component } from 'react'
import { MyContext } from '../../context'
import axios from 'axios'

export default class UserDetail extends Component {
  state = {
    user: undefined
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params
    const {
      data: { user }
    } = await axios.get(`http://localhost:3000/users/allusers/${id}`)
    this.setState({
      user
    })
  }

  render() {
    let { user } = this.state

    return (
      <div className="profile-container col-md-8 offset-md-2">
        <div className="profile-bar  col-md-4"></div>
        <div className="profile-contentcol-md-4">
          <div>{user && <p>{user.username}</p>}</div>
          <div>{user && <p>{user.email}</p>}</div>
          <div>{user && <p>{user.genres}</p>}</div>
          <div>{user && <p>{user.description}</p>}</div>
        </div>
      </div>
    )
  }
}

UserDetail.contextType = MyContext
