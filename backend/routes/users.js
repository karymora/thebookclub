const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/allusers', (req, res, next) => {
  User.find()
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/allusers/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.put('/allusers/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.delete('/allusers/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
