const mongoose = require('mongoose')

const yearSchema = new mongoose.Schema({
  jan: { type: Number },
  feb: { type: Number },
  mar: { type: Number },
  apr: { type: Number },
  may: { type: Number },
  jun: { type: Number },
  jul: { type: Number },
  aug: { type: Number },
  sep: { type: Number },
  oct: { type: Number },
  nov: { type: Number },
  dec: { type: Number }
})
const savingDepositSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 에금, 적금 구분
  bankCode: { type: String },
  bankName: { type: String, required: true },
  payment: { type: Number, required: true },
  joinDate: { type: Date, required: true },
  period: { type: Number, required: true }, // 개월수 기준 ex) 2년 - 24
  rate: { type: Number, required: true }
})

const annualSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  year: { type: String, required: true },
  staticRevenue: { type: [yearSchema] },
  staticExpend: [{
    categoryId: { type: String },
    itemId: { type: String },
    name: { type: String },
    payment: { type: Number, required: true }
  }],
  flexibleExpend: [{
    payment: { type: Number, required: true },
    reason: { type: String, required: true }
  }],
  saving: [savingDepositSchema],
  deposit: [savingDepositSchema]
})

annualSchema.statics.create = function (payload) {
  const annualPlan = new this(payload)
  return annualPlan.save()
}

annualSchema.statics.updateAnnual = function() {}

module.exports = mongoose.model('Annual', annualSchema)