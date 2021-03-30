const express = require('express')
const router = express.Router();
const patientdetailcontroler =require('../controllers/patientdetail')
const checkAuth = require('../middleware/check-auth');
router.post("/patientdetail",patientdetailcontroler.creatpatientdetail)
router.get("/patientdetail/:id",patientdetailcontroler.getpatientdetail)
router.get("/patientdetail",patientdetailcontroler.gettingPost);

module.exports =router;
