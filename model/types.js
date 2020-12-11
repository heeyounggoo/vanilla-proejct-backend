const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  categoryId: { type: String, required: true },
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  order: { type: Number, required: true }
})

mongoose.model('Types', typeSchema)