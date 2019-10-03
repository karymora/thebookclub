import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/index'
import Button from '../../components/Button/Button'
import { MyContext } from '../../context'

export default class CreateMeetings extends Component {
  state = {
    meeting: {
      meetingName: '',
      meetingDate: '',
      meetingDescription: '',
      img: ''
    },
    response: undefined
  }

  handleInput = e => {
    this.setState({
      meeting: {
        ...this.state.meeting,
        [e.target.name]: e.target.value
      }
    })
  }

  addMeeting = e => {
    e.preventDefault()
    AUTH_SERVICE.addmeeting(this.state.meeting)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('de aquí no')
      })
  }

  render() {
    let { meeting } = this.state
    console.log(this.state.meeting)
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
        <div className={{ width: '80vw' }}>
          <form onSubmit={this.addMeeting}>
            <div
              className="container sign-up-total"
              style={{
                display: 'flex',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="col-md-12"
                style={{
                  display: 'inline-block',
                  marginTop: '20px'
                }}
              >
                {/* Name */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Name</label>
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
                    name="meetingName"
                    value={meeting.meetingName}
                  />
                </div>

                {/* Date */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Date of meeting </label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="date"
                    className="form-control"
                    onChange={this.handleInput}
                    name="meetingDate"
                    value={meeting.meetingDate}
                  />
                </div>

                {/* Description */}

                <div className="form-group">
                  <label for="formGroupExampleInput"> Description </label>
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
                    name="meetingDescription"
                    value={meeting.meetingDescription}
                  />
                </div>

                {/*Image*/}
                <div className="form-group">
                  <label for="formGroupExampleInput">Image</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={meeting.img}
                  />
                </div>

                <Button bg="black" htmlType="submit">
                  Create meeting
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

CreateMeetings.contextType = MyContext
