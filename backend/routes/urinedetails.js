const express = require('express')
const router = express.Router();
const urinedetailcontroler = require('../controllers/urinedetail.controler')
const checkAuth = require('../middleware/check-auth');
router.post("/urinedetail",urinedetailcontroler.createurinedetails)
router.get("/urinedetail/:id",urinedetailcontroler.gettingurineDetailsById)
router.get("/urinedetail",urinedetailcontroler.getUrineDetails)
// router.put('/forgetPassword',urinedetailcontroler.forgetpassword)
module.exports =router;
