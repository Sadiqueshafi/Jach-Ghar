// var applicationCtrl = require('../helpers/applicationCtrl')
const jachGharAllData =require('../models/jachghar.model');


exports.creatalldetail = (req,res,next)=>{
  let jachghar = new jachGharAllData({
    date:req.body.date,
    patientName:req.body.patientName,
    age:req.body.age,
    sex:req.body.sex,
    dr:req.body.dr,
    blood:{
      grouping:req.body.blood.grouping,
      rhtype:req.body.blood.rhtype,
      vdrl:req.body.blood.vdrl,
      urine:req.body.blood.urine,
      hcv:req.body.blood.hcv,
      ra:req.body.blood.ra,
      aso:req.body.blood.aso,
      normalrange:req.body.blood.normalrange,
      remark:req.body.blood.remark,
      serum:req.body.blood.serum,
    },
    urine:{
     quantity:req.body.urine.quantity,
     specific:req.body.urine.specific,
     colour:req.body.urine.colour,
     sediment:req.body.urine.sediment,
     transparency:req.body.urine.transparency,
     reaction:req.body.urine.reaction,
     albumin:req.body.urine.albumin,
     suger:req.body.urinesuger,
     acetone:req.body.urine.acetone,
     bilesalt:req.body.urine.bilesalt,
     bilepigment:req.body.urine.bilepigment,
     urobilnogen:req.body.urine.urobilnogen,
     testedbyuristicmethod:req.body.urine.testedbyuristicmethod,
    },

  });
  console.log(jachghar)
  console.log(jachghar.billingno)
    jachghar.save().then(jachghar=>{

      console.log(jachghar)
    res.status(200).json(
      {message:"patient data added successfully"},
    )
}).catch(error =>{
  res.status(500).json({
      message:"patient field failed"
  })
})
}


exports.getAllPatientDetails = (req,res,next)=>{
  jachGharAllData.findById(req.params.id).then(patientDetail =>{
      if(patientDetail){
          res.status(200).json(patientDetail)
      }
      else{
          res.status(404).json({message:'patientDetalis Not Found!'})
      }
  })
}

exports.getPatientAllDetails= (req,res,next)=>{
  const patientAllDetails =jachGharAllData.find();
        patientAllDetails.then(document =>{
      res.status(200).json({
      message:'patientDetails message fetch successfully',
      jachGharAllData:document
  })
})
}
