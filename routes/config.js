const router = require('express').Router()
const Config = require('../models/config')
// const { handler } = require('../script/util')

router.post('/', (req, res) => {
  // handler(req, res, Config.insertMany(req.body))
  Config.insertMany(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err))
})

module.exports = router