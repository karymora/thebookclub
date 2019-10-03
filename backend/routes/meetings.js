const express = require('express')
const router = express.Router()
const Meeting = require('../models/Meeting')

router.get('/allmeetings', (req, res, next) => {
  Meeting.find()
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/allmeetings/:id', (req, res, next) => {
  Meeting.findById(req.params.id)
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

router.put('/allmeetings/:id', (req, res, next) => {
  Meeting.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

router.delete('/allmeetings/:id', (req, res, next) => {
  Meeting.findByIdAndDelete(req.params.id)
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
