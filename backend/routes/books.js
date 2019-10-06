const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const User = require('../models/User')

router.get('/allbooks', (req, res, next) => {
  Book.find()
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.post('/:id/addToBookshelf', async (req, res, next) => {
  const theBook = await Book.findById(req.params.id)
  theMeeting.assistants.push(req.body.id)
  await theMeeting.save()
  res.status(201).json({ msg: 'Todo chido' })
})

router.get('/allbooks/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.put('/allbooks/:id', (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.delete('/allbooks/:id', (req, res, next) => {
  Book.findByIdAndDelete(req.params.id)
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
