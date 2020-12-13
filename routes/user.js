const router = require('express').Router()
const User =  require('../models/user')
const { handler } = require('../script/util')

router.post('/', (req, res) => {
  handler(req, res, User.create(req.body))
})

router.get('/user/:userId', (req, res) => {
  handler(req, res, User.findUser(req.params.userId))
})

router.put('/user/:userId', (req, res) => {
  handler(req, res, User.updateUser(req.params.userId, req.body))
})

module.exports = router