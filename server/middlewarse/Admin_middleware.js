const jwt = require("jsonwebtoken");
let DB = require('../models/user_model')

let isAdmin = async (req, resp, next)=>{
 let token = req.header("Authorization");

 if(!token){
     return resp.status(401).json({mes: "token is not provided..."})
 }

let jwtToken = token.replace("bearer", "").trim()



try {
 let isVerified = jwt.verify(jwtToken, process.env.MY_SIGNER);
 console.log("isVerified==> ", isVerified);
 let userData = await DB.findOne({email: isVerified.email}).select({password: 0});
console.log("this is middleware data=====> ", userData)
 if(userData && userData.isAdmin){
    next();
 }else{
     // User is not an admin, redirect to the home page or send an error response
     return res.status(403).json({ message: 'Forbidden - User is not an admin' });
 }

} catch (error) {
return resp.send({mes: "you are not admin"})
}
}

module.exports = isAdmin;