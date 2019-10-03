const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Book = require('../models/Book')
const Meeting = require('../models/Meeting')
const passport = require('../config/passport')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(200).json({ user })
})

// router.post('/login', (req, res, next) => {
//   User.findOne({ username: req.body.username }).then(user => {
//     res.status(200).json(user)
//   })
// })
router.post('/addbook', (req, res, next) => {
  let book = Book.create(req.body)
    .then(book => res.status(201).json({ book }))
    .catch(err => res.status(401).json({ err }))
})

router.post('/addmeeting', (req, res, next) => {
  let meeting = Meeting.create(req.body)
    .then(meeting => res.status(201).json({ meeting }))
    .catch(err => res.status(401).json({ err }))
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
})

router.get('/loggedin', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

router.post('/edit', isAuth, (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router
