const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  {
    date: {
      type: Date
    },

    bookGenre: {
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
