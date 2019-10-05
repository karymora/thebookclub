import React, { Component } from 'react'
import { Card, Icon, Form } from 'antd'
import axios from 'axios'
import Button from '../Button/StyledButton'
import MyProvider from '../../context/index'

// const User = require('../models/User')

export default class AllMeetings extends Component {
  state = {
    meetings: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/meetings/allmeetings')
      .then(response => {
        this.setState({ meetings: response.data.meeting })
        console.log(this.state.meetings)
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
    const userId = { id: '5d958c4e17305210f6ce4088' }
    console.log('>>>>' + MyProvider.state)
    const { data } = await axios.post(
      `http://localhost:3000/meetings/${meetingId}/meetingregister`,
      userId
    )
    console.log(data)
  }

  render() {
    let { meetings } = this.state
    console.log(meetings)
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
            <div>{meeting.assistants}</div>

            <Button bg="black" onClick={() => this.joinMeeting(meeting._id)}>
              Click me
            </Button>
          </Card>
        ))}
      </div>
    )
  }
}
