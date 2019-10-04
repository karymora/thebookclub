const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')
// const mongoose = require('mongoose');

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
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book'
      }
    ],

    description: String,

    meeting: {
      type: Schema.Types.ObjectId,
      ref: 'Meeting'
    }

    // sentRequest: [
    //   {
    //     username: { type: String, default: '' }
    //   }
    // ],
    // request: [
    //   {
    //     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //     username: { type: String, default: '' }
    //   }
    // ],
    // friendsList: [
    //   {
    //     friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //     friendName: { type: String, default: '' }
    //   }
    // ],
    // totalRequest: { type: Number, default: 0 }
  },

  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'username' })

module.exports = model('User', userSchema)
