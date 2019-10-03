const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    date: {
      type: Date
    },

    bookGenre: {
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
    imageBook: String,
    description: String,
    reviews: {},
    stars: Number
    //reviews?
  },

  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Book', bookSchema)
