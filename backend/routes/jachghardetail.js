const express = require('express')
const router = express.Router();
const patientdetailcontroler = require('../controllers/jachgharreport');

router.post("/alldetails",patientdetailcontroler.creatalldetail);
router.get("/alldetails/:id",patientdetailcontroler.getAllPatientDetails);
router.get("/alldetails",patientdetailcontroler.getPatientAllDetails);

module.exports =router;
