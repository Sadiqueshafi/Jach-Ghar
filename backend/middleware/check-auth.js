const jwt = require('jsonwebtoken');
module.exports =(req,res,next)=>{
    try{
        const token = req.header.authorization.split('')[1];
       const decodedToken = jwt.verify(token,"secreate_this_should_be_longer");
       req.userData={email:decodedToken.email,userId:decodedToken.userId}
       console.log(req.userData)
        next()
    }
    catch(error){
        res.status(401).json({message:"Auth Failed"});
    }
}
