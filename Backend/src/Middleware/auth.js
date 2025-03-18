const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

require('dotenv').config({  path:'./src/config/.env'});
const auth=async(req, res, next)=>{
    const tokenauth=req.header.Authentication;
    const token =  tokenauth.split(" ")[1]; 
    const secret = process.env.private_key;

    jwt.verify(token, secret, function(err, decoded) {
  if (err) {``
    
      
        // name: 'TokenExpiredError',
        // message: 'jwt expired',
        // expiredAt: 1408621000
        console.log('error in with middleware', err);
      
      
    }
    else{
      const finduser= decoded.email;
      req.user=finduser;
      next();
    }
});
}
module.exports=auth;
