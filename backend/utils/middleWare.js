let jwt = require('jsonwebtoken')
const config = require('../config/default')



let checkToken = (req, res, next)=>{
  console.log(req.headers)
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if (token) {
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        console.log('Token is not valid')
        return res.json({
          error: true,
          message: 'Token is not valid',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    console.log('Token not supplied')
    return res.json({
      error: true,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}
