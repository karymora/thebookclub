const express = require('express')
const Meeting = require('../models/Meeting')
const passport = require('../config/passport')
const User = require('../models/User')
const router = express.Router()

router.get('/allmeetings', (req, res, next) => {
  Meeting.find()
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/allmeetings/:id', async (req, res, next) => {
  // Meeting.findById(req.params.id)
  const meeting = await Meeting.findById(req.params.id)
    .populate('assistants')
    .then(meeting => res.status(200).json({ meeting }))
    .catch(error => res.status(500).json({ error }))
})

router.post('/:id/meetingregister', async (req, res, next) => {
  const theMeeting = await Meeting.findById(req.params.id)
  theMeeting.assistants.push(req.body.id)
  await theMeeting.save()
  res.status(201).json({ msg: 'Todo chido' })
})

router.get('/:id/meetingregister', (req, res, next) => {
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
