const mongoose =require('mongoose');
// const User = mongoose.model('User');
const User = require('../models/user.model');
const bcrypt  = require('bcrypt');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { info } = require('console');
const logger = require('../logger/logger')
const applicationCtrl = require('../helpers/applicationCtrl')
var responseUtil = require('../utils/responseUtil')

exports.getDetails= (req,res,next)=>{
  const user =User.find();
  console.log("d"+user);
      user.then(document =>{
      res.status(200).json({
      message:'urineDetail message fetch successfully',
      User:document,
  })
})
}

module.exports.register=(req,res,next)=>{
var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.password =req.body.password;
  user.save((err,doc)=>{
    if(!err) {
      res.send(doc);
      console.log(doc)

  transporter.sendMail(mailOption, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info.response);
    }
  });

    }
    else{
      if(err.code ==11000){
        res.status(422).send(['Dublecate email address found'])
      }else{
        return next(err)
      }
     }
  })
}
// async function sendMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: '1234sadique1234@gmail.com', // generated ethereal user
      pass: 'patanahi', // generated ethereal password
    },tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  let mailOption =  {
    from: '"JachGhar 👻" 1234sadique1234@gmail.com', // sender address
    to: "sadiqueshafi@outlook.com", // list of receivers
    subject: "Welcome to JachGhar ✔", // Subject line
    text: "Congrulation you have successfully signup your account", // plain text body
  };


exports.
userLogin =(req,res,next)=>{
  let fetchuser;
  User.findOne({
      email:req.body.email
      // password:req.body.password
  }).then(user =>{
      if(!user){
          return res.status(401).json({
              message:"Auth failed"
          })
      }
      fetchuser = user
      console.log(user)
      return bcrypt.compare(req.body.password,user.password)
  })
  .then(result=>{
      if(!result){
          return res.status(401).json({
              message:"auth failed"
          })
      }
      console.log(result)

      const token = jwt.sign({email:fetchuser.email,userId:fetchuser._id},
          'secrete_this_should_be_longer',{expiresIn:"1h"});
      res.status(200).json({
          token:token,
          expiresIn:3600,
          userId:fetchuser._id
      })
  })
  .catch(err =>{
      return res.status(401).json({
          message:"You  Are not Authenticateds"
      });
  });

}


exports.forgetpassword =(req,res,next)=>{
  let params = req.body['query']
  logger.info(req.method + ':' + req.originalUrl)
  let query = { '_id': params._id }
  data =  applicationCtrl.UsersInstance.get(query)
  var result = data['data']['password']
  try {
      if (bcrypt.compareSync(params.currentPassword, result)) {
          var confirmPassword = hashingPaswword(params.password)
          query['password'] = confirmPassword
          query['loginCount'] = 1
          result =  applicationCtrl.UsersInstance.put(query)
          if (result) {
              return responseUtil.responseUtil(req, res, false, 'password is changed successfully', result, 200)
          }
      }
      else {
          return res.status(500).json({ error: true, msg: 'CurrentPassword entered is wrong', data: data });
      }
  }
  catch (e) {
      logger.error(e)
      return res.status(500).json({ error: true, msg: e, data: data });
  }

  //   const {email} =rereq.body;
//   User.findOne({email},(err,user)=>{
//     if(err || !user){
//       return res.status(400).json({err:"user with the email doesn't exists"})
//     }

//     const token = jwt.sign({_id:user._id},
//       'accountactivatekey12345',{expiresIn:"20m"});
//       const data ={}
//        res.status(200).json({
//         token:token,
//         expiresIn:3600,
//         userId:fetchuser._id
//        })
//     })
// .catch(err =>{
//   return res.status(401).json({
//       message:"You  Are not Authenticateds"
//   });
// });

}
function hashingPaswword(params) {
  var hash = bcrypt.hashSync(params, saltRounds);
  params = hash
  return params;
}
