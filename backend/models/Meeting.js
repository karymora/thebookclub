const { Schema, model } = require('mongoose')

const meetingSchema = new Schema(
  {
    meetingName: String,
    assistants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    meetingDate: Date,

    // user: {
    //   ref: 'User',
    //   type: Schema.Types.ObjectId
    // },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User'
    // },

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
