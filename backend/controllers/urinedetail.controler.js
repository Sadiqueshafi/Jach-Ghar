const urineDetail = require('../models/urinedetail.model');

exports.createurinedetails = (req,res,next)=>{
  const createurinedetail = new urineDetail({
    quantity:req.body.quantity,
    specific:req.body.specific,
    colour:req.body.colour,
    sediment:req.body.sediment,
    transparency:req.body.transparency,
    reaction:req.body.reaction,
    albumin:req.body.albumin,
    suger:req.body.suger,
    acetone:req.body.acetone,
    bilesalt:req.body.bilesalt,
    bilepigment:req.body.bilepigment,
    testedbyuristicmethod:req.body.testedbyuristicmethod,

    // creator:req.userData.bloodId
  })
  createurinedetail.save().then(createurinedetails=>{
    res.status(200).json(
      {message:"urine data added successfully"},
    )
}).catch(error =>{
  res.status(500).json({
      message:" Urine detail failed  "
  })
})
}
exports.gettingurineDetailsById = (req,res,next)=>{
  urineDetail.findById(req.params.id).then(urineDetail =>{
      if(urineDetail){
          res.status(200).json(urineDetail)
      }
      else{
          res.status(404).json({message:'UrineDetail Not Found!'})
      }
  })
}

exports.getUrineDetails= (req,res,next)=>{
  const findingpage =urineDetail.find();
      findingpage.then(document =>{
      res.status(200).json({
      message:'urineDetail message fetch successfully',
      UrineDetail:document
  })
})
}
