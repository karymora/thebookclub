const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
  {
    content: String,
    creator: {
      ref: 'User',
      type: Schema.Types.ObjectId
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

module.exports = model('Content', commentSchema)
