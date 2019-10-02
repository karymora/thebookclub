const { Schema, model } = require('mongoose')

const placeSchema = new Schema(
  {
    namePlace: String,
    meetings: [],

    location: {
      type: {
        type: String,
        default: 'Point'
      },
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }
  },

  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Place', placeSchema)
