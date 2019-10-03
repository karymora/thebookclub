const express = require('express')
const router = express.Router()
const Book = require('../models/Book')

router.get('/allbooks', (req, res, next) => {
  User.find()
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/allbooks/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.put('/allbooks/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.delete('/allbooks/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
