const { Schema, model } = require('mongoose')

const meetingSchema = new Schema(
  {
    meetingName: String,
    assistants: [],

    meetingDate: {
      type: Date
    },

    // location: {
    //   type: {
    //     type: String,
    //     default: 'Point'
    //   },
    //   address: {
    //     type: String
    //   },
    //   coordinates: {
    //     type: [Number]
    //   }
    // },

    meetingDescription: {
      type: String
    },
    img: {
      type: String
      // default:
      //   'https://i.ibb.co/gWjqGf2/adolescent-connection-discussion-1595391.jpg'
      // //required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// meetingSchema.index({
//   location: '2dsphere'
// })

module.exports = model('Meeting', meetingSchema)
