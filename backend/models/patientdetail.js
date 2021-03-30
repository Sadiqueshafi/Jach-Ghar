const mongoose = require('mongoose')

const patientDetail = mongoose.Schema({
  id:String,
  date:{type:String},
  patientName:{type:String},
  age:{type:Number},
  sex:{type:String},
  dr:{type:String},

})

module.exports = mongoose.model('patientDetail',patientDetail);
