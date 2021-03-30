const patientdetail =require('../models/patientdetail');

exports.creatpatientdetail = (req,res,next)=>{
  const detailpatient =new patientdetail({
    date:req.body.date,
    patientName:req.body.patientName,
    age:req.body.age,
    sex:req.body.sex,
    dr:req.body.dr,
    // creator:req.userData.patientid
  })
  detailpatient.save().then(patientfunction=>{
    res.status(200).json(
      {message:"patient data added successfully"},
    )
}).catch(error =>{
  res.status(500).json({
      message:" patient field failed"
  })
})
}

exports.getpatientdetail = (req,res,next)=>{
  patientdetail.findById(req.params.id).then(patientDetail =>{
      if(patientDetail){
          res.status(200).json(patientDetail)
      }
      else{
          res.status(404).json({message:'getpatientdetail Not Found!'})
      }
  })
}

exports.gettingPost = (req,res,next)=>{
  const findingpage =patientdetail.find();
      findingpage.then(document =>{
      res.status(200).json({
      message:'post message fetch successfully',
      patientdetail:document
  })
})
}

