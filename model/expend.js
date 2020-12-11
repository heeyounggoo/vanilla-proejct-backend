const mongoose = require('mongoose')

const expendSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  payment: { type: Number, required: true },
  type: { type: String },
  categoryId: { type: String },
  itemId: { type: String },
  memo: { type: String }
})

mongoose.model('Expend', expendSchema)