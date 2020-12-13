const router = require('express').Router()
const Types = require('../models/types')
// const { handleInsertMany } = require('../script/util')

router.post('/', (req, res) => {
  Types.insertMany(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err))
})

module.exports = router