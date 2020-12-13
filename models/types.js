const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  categoryId: { type: String, required: true },
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String }
  // order: { type: Number, required: true }
})

// POST(types create)
// typeSchema.statics.create = function (payload) {
//   console.log('type create ', payload)
//   const types = new this(payload)
//   return types.save()
// }

module.exports = mongoose.model('Types', typeSchema)