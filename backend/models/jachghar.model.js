const mongoose = require('mongoose');
const { type } = require('os');
const jachGharAllData = new mongoose.Schema({
  // billingNo :{billingno},
  date:{type:String},
  patientName:{type:String},
  age:{type:Number},
  sex:{type:String},
  dr:{type:String},
  blood:{
    type:new mongoose.Schema({
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
    }),
  },
  urine:{
    type:new mongoose.Schema({
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
    })
  },

  created: {
    type: Date,
    default: Date.now
},
status: {
    type: String,
    enum: ["Active", "InActive"],
    default: 'Active'
},
// billingNo:{
//     billingNo:gfg()
//     },
updatedAt: {
    type: Date,
    default: Date.now
},
billingNo:{type:String,default:billingno()}
//  random: {type: [Number], default: function(){ return [Math.random(), Math.random()]}, }
// billingNo:{type:function(){}}

})

  function billingno(){
    var minm = 10000;
    var maxm = 99999;
   return Math.floor(Math.random() * (maxm - minm + 1)) + minm;

  }
// }

module.exports = mongoose.model('jachghar',jachGharAllData);
