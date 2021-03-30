const blooddetail = require('../models/blooddetail.model');
exports.createblooddetail = (req,res,next)=>{
  const detailofblood = new blooddetail({
    grouping:req.body.grouping,
    rhtype:req.body.rhtype,
    vdrl:req.body.vdrl,
    urine:req.body.urine,
    hcv:req.body.hcv,
    ra:req.body.ra,
    aso:req.body.aso,
    normalrange:req.body.normalrange,
    remark:req.body.remark,
    serum:req.body.serum,
  })
  detailofblood.save().then(bloodfunction=>{
    res.status(200).json(
      {message:"blood data added successfully"},
    )
}).catch(error =>{
  res.status(500).json({
      message:" blood detail failed"
  })
})

}

exports.gettingBloodDetailsById = (req,res,next)=>{
  blooddetail.findById(req.params.id).then(patientDetail =>{
      if(patientDetail){
          res.status(200).json(patientDetail)
      }
      else{
          res.status(404).json({message:'gettingblood Not Found!'})
      }
  })
}

exports.getBloodDetails= (req,res,next)=>{
  const findingpage =blooddetail.find();
      findingpage.then(document =>{
      res.status(200).json({
      message:'blooddetail message fetch successfully',
      bloodDetails:document
  })
})
}
