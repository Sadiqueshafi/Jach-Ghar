const mongoose = require('mongoose')

const blooddetails = mongoose.Schema({
  id:String,
  grouping:{type:String},
  rhtype:{type:String},
  vdrl:{type:String},
  urine:{type:String},
  hcv:{type:String},
  ra:{type:String},
  aso:{type:String},
  normalrange:{type:String},
  remark:{type:String},
  serum:{type:String},
  // creator:{type:mongoose.Schema.Types.ObjectId,ref:"blooddetails",required:true}
})
module.exports = mongoose.model('bloodgrouping',blooddetails);
