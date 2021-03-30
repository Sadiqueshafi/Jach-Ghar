const express = require('express');
const router = express.Router();
const resetPasswordModule = require('../controllers/resetpassword')
const checkAuth = require('../middleware/check-auth');
router.post('/forgotPassword',  resetPasswordModule.forgotPassword);
router.post('/otpVerify',  resetPasswordModule.otpVerification);
router.post('/resetPassword',  resetPasswordModule.resetPassword);


module.exports =router;

