 var express=require('express');
 var router = express.Router();
 const curlUser = require('../controllers/user.controller');
 router.post('/api/register',curlUser.register);
 router.post("/api/login",(req,res)=>{
  res.send(curlUser.userLogin);

 });
//  console.log('as',curlUser.userLogin)
 router.get("/api/register",curlUser.getDetails);
 //  router.get("/register",curlUser.getDetails)

 module.exports =router;
