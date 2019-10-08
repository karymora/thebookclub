import React, { Component } from 'react'
import { MyContext } from '../../context/index'
import TopBar from '../../components/TopBar'
//import Sidebar from '../../components/Sidebar/Sidebar'

import axios from 'axios'
//import { Card } from 'antd'

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
    const assistants = this.state.meeting.assistants
    console.log('a verrrrr ' + this.state.meeting.assistants)
    console.log('este es el meeting', meeting)

    return (
      <div className="col-md-8 offset-md-2">
        {/* <TopBar></TopBar> */}
        <div className="col-md-4">
          <div> {meeting && <p>{meeting.meetingName}</p>}</div>
          {/* <div>{meeting && <p>{meeting.meetingDetail}</p>}</div>
          <div>{meeting && <p>{meeting.meetingDescription}</p>}</div>  */}
        </div>
        {assistants.map((assistant, i) => (
          <div className="the-assistants" key={i}>
            <div className="assistant-image">
              <img src={assistant.image} alt={'assistant.username'} />
            </div>
            <div className="assistant-name">{assistant.username}</div>
          </div>
        ))}{' '}
      </div>
    )
  }
}

MeetingDetail.contextType = MyContext
