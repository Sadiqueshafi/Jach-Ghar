const mongoose = require('mongoose')

const urinedetail = mongoose.Schema({
  id:String,
  quantity:{type:String},
  specific:{type:String},
  colour:{type:String},
  sediment:{type:String},
  transparency:{type:String},
  reaction:{type:String},
  albumin:{type:String},
  suger:{type:String},
  acetone:{type:String},
  bilesalt:{type:String},
  bilepigment:{type:String},
  urobilnogen:{type:String},
  testedbyuristicmethod:{type:String},
  // creator:{type:mongoose.Schema.Types.ObjectId,ref:"Patientdetail",required:true}

})

module.exports = mongoose.model('Urinedetails',urinedetail);
