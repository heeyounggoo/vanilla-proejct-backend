const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
  birth: { type: String },
  age: { type: String }
})

module.exports = mongoose.model('User', userSchema)