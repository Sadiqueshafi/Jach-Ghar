const express = require('express')
const router = express.Router();
const blooddetailcontroler =require('../controllers/blooddetailcontroler')
const checkAuth = require('../middleware/check-auth');
router.post("/blooddetail",blooddetailcontroler.createblooddetail);
router.get("/blooddetail/:id",blooddetailcontroler.gettingBloodDetailsById)
router.get("/blooddetail",blooddetailcontroler.getBloodDetails)
module.exports = router;
