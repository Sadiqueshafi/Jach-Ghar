// var userControllerModule = require('../')
var schema = require('../models/user.model');
const bcrypt  = require('bcrypt');
const saltRounds = 10;
var responseUtil = require('../utils/responseUtil')
var config = require('../config/default')
var request = require('request')
var logger = require('../logger/logger')


function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

module.exports = {

      forgotPassword: function (req, res) {
        let params = req.body['query'];
		logger.info(req.method + ':' + req.originalUrl)
        let query = { $or: [{ 'email': params['email'], status: 'Active' }, { 'phone': params['email'], status: 'Active' }] }
        schema.find(query, function (err, result) {
            if (err) {
				logger.error(err)
			}
            if (result.length == 0) {
                return responseUtil.responseUtilMessage(req, res, true, 'user not found', 500)
            }
            else {
                var otp = generateOTP()
                var phone = result[0].phone;
                var msg = 'Your OTP is:' + otp
                config.sms(phone, msg)
                schema.update(params, { $set: { OTP: otp } }, function (err, data) {
                    if (data) {
                        return responseUtil.responseUtil(req, res, false, 'otp sent successfully', data, 200)
                    }

                })
            }

        })
    },

    //otp verification

    otpVerification: function (req, res) {
        let params = req.body['query']
        logger.info(req.method + ':' + req.originalUrl)
        schema.find(params, function (err, result) {
            if (!result || result.length == 0) {
                return responseUtil.responseUtilMessage(req, res, true, 'OTP not matched', 500)
            }
            else {

                schema.update(params, { $set: { OTP: null } }, function (err, data) {
                    if (data) {
                        return responseUtil.responseUtil(req, res, false, 'otp is verfied', data, 200)
                    }

                })
            }

        })
    },

    //reset Password

    resetPassword: function (req, res) {
        let params = req.body['query'];
        console.log("a"+params)
        logger.info(req.method + ':' + req.originalUrl)
        var pass = hashingPaswword(params.password)
        console.log("b"+pass)
        schema.updateOne({ email: params.email }, { $set: { password: pass } }, function (err, result) {
            if (result) {

              console.log("c"+JSON.stringify( result))
                return responseUtil.responseUtil(req, res, false, 'password is reset successfully', result, 200)
            }
        })
    }

}

function hashingPaswword(params) {
    var hash = bcrypt.hashSync(params, saltRounds);
    params = hash
    return params;
}


