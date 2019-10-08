import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../Button/SimpleButton'
//import MyProvider, { MyContext } from '../../context/index'
import { MyContext } from '../../context/index'

// const User = require('../models/User')

export default class AllMeetings extends Component {
  state = {
    meetings: [],
    user: {
      username: '',
      email: '',
      genres: '',
      description: '',
      contacts: []
    },
    user: JSON.parse(localStorage.getItem('user'))
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/meetings/allmeetings')
      .then(response => {
        this.setState({ meetings: response.data.meeting })
        const userInfo = this.state.user
        console.log('+++++' + userInfo)
        // console.log(this.state.meetings)
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteMeeting = id => {
    axios
      .delete(`http://localhost:3000/meetings/allmeetings/${id}`)
      .then(response => {
        this.setState(prevState => {
          return {
            ...prevState,
            meetings: prevState.meetings.filter(
              e => e._id !== response.data.meeting._id
            )
          }
        })
      })
      .catch(err => console.log(err))
  }

  editMeeting = id => {
    this.props.history.push(`/allmeetings/edit/${id}`)
  }

  joinMeeting = async meetingId => {
    const userId = { id: this.state.user }
    console.log('Este es el seeeeeer', userId)
    const data = await axios.post(
      `http://localhost:3000/meetings/${meetingId}/meetingregister`,
      userId
    )
    console.log('****' + userId)
    console.log('dataaaaa' + userId)
  }

  render() {
    let { meetings } = this.state
    const { user } = this.state.user
    console.log('>>>>> this is the user' + user)

    console.log(console.log('aquí abajo!!!!! '))
    console.log('the props' + this.props[0])
    console.log('the props' + this.props[1])
    console.log(meetings)
    console.log('si estoy entrando!')
    return (
      // <MyContext.Consumer>
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
        <div className="header-new">
          <div className="header2">
            <h1>Reuniones cerca de tí</h1>
          </div>
          <div>
            <div className="header2">
              <Link to={`/addmeeting`}>
                <h2>Agrega una reuninón</h2>
              </Link>
            </div>
          </div>
        </div>
        {meetings.map((meeting, i) => (
          // <div className="user-container col-md-4 offset-md-4" key={i}>
          //   <div className="container">{user.email}</div>
          // </div>

          <Card
            title={meeting.meetingName}
            actions
            key={meeting._id}
            style={{ width: '25%' }}
            cover={
              <img
                src={meeting.img}
                alt={meeting.meetingName}
                height="500px"
                onClick={() =>
                  this.props.history.push(
                    `/allmeetings/meetings/${meeting._id}`
                  )
                }
              />
            }
            actions={[
              <Icon
                type="delete"
                key="delete"
                onClick={() => this.deleteMeeting(meeting._id)}
              />,
              <Icon
                type="edit"
                key="edit"
                onClick={() => this.editMeeting(meeting._id)}
              />
            ]}
          >
            <Button bg="black" onClick={() => this.joinMeeting(meeting._id)}>
              Unirte a al reunion
            </Button>
          </Card>
        ))}
      </div>
      // </MyContext.Consumer>
    )
  }
}

AllMeetings.contextType = MyContext
