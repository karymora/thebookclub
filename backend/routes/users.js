const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Book = require('../models/Book')

router.get('/allusers', (req, res, next) => {
  User.find()
    .populate('booksRead', 'title')
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/allusers/:id', async (req, res, next) => {
  const librosUser = User.findById(req.params.id)
    .populate({ path: 'booksRead', populate: { path: 'booksRead' } })
    .then(librosUser => res.status(200).json({ librosUser }))
    .catch(error => res.status(500).json({ error }))
})

router.put('/allusers/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/:id/addToBookshelf', (req, res, next) => {
  User.findById(req.params.id)
    .then(book => res.status(200).json({ book }))
    .catch(error => res.status(500).json({ error }))
})

router.post('/:id/addToBookshelf', async (req, res, next) => {
  const userShelf = await User.findById(req.params.id)
  userShelf.booksRead.push(req.body.id)
  const userModified = await userShelf.save()
  console.log(req.body.id)
  res.status(200).json(userModified)
})

router.delete('/allusers/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
