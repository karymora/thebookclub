import React, { Component } from 'react'
import { MyContext } from '../../context/index'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from 'axios'
import { Card } from 'antd'

export default class MeetingDetail extends Component {
  state = {
    meeting: {
      meetingName: '',
      meetingDate: '',
      meetingDescription: '',
      assistants: []
    }
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params
    const {
      data: { meeting }
    } = await axios.get(`http://localhost:3000/meetings/allmeetings/${id}`)
    this.setState({
      meeting
    })
  }

  render() {
    let { meeting } = this.state
    console.log('este es el meeting', meeting)

    return (
      <div className="col-md-8 offset-md-2">
        <div className="col-md-4">aquí va la foto</div>
        <div className="col-md-4">
          <div> {meeting && <p>{meeting.meetingName}</p>}</div>
          <div>{meeting && <p>{meeting.meetingDetail}</p>}</div>
          <div>{meeting && <p>{meeting.meetingDescription}</p>}</div>
        </div>
        {meeting.assistants.map((assistant, i) => (
          <div>{meeting.assistants[i]}</div>
        ))}
      </div>
    )
  }
}

MeetingDetail.contextType = MyContext
