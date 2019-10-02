const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: String,
    username: String,
    image: String,
    role: {
      type: String,
      enum: ['admin', 'user']
    },
    placePreference: {
      type: String,
      enum: ['café', 'bar']
    },
    genres: {
      type: String,
      enum: [
        'scifi',
        'fantasy',
        'historic',
        'romance',
        'horror',
        'thriller',
        'mystery',
        'dystopia'
      ]
    },
    description: String,
    contacts: {},
    booksRead: {}
  },

  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)
