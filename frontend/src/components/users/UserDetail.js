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

    return <div>{user && <p>{user.username}</p>}</div>
  }
}

UserDetail.contextType = MyContext
