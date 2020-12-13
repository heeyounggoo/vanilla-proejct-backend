const mongoose = require('mongoose')

const configSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String }
})

module.exports = mongoose.model('Config', configSchema)