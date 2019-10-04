import React, { Component } from 'react'
import { MyContext } from '../../context/index'
import axios from 'axios'

export default class MeetingDetail extends Component {
  state = {
    meeting: ''
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

    return (
      <div className="col-md-8 offset-md-2">
        <div className="col-md-4">aquí va la foto</div>
        <div className="col-md-4">
          <div>{meeting && <p>{meeting.meetingName}</p>}</div>
          <div>{meeting && <p>{meeting.meetingDetail}</p>}</div>
          <div>{meeting && <p>{meeting.meetingDescription}</p>}</div>
          <div>{meeting && <p>{meeting.img}</p>}</div>
        </div>
      </div>
    )
  }
}

MeetingDetail.contextType = MyContext
