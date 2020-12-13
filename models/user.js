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

userSchema.statics.create = function (payload) {
  const user = new this(payload)
  return user.save()
}

userSchema.statics.findUser = function (userId) {
  return this.findOne({ userId: userId })
}

userSchema.statics.updateUser = function (userId, payload) {
  return this.updateOne({ userId: userId }, payload)
}

module.exports = mongoose.model('User', userSchema)