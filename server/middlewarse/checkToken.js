const jwt = require("jsonwebtoken");
let DB = require('../models/user_model')

let checkToken = async (req , resp, next)=>{
     let token = req.header("Authorization");

     if(!token){
         return resp.status(401).json({mes: "token is not provided..."})
     }
    //  if token is provide it run next to give the user acces
    let jwtToken = token.replace("bearer", "").trim()
    console.log("jwtToken=>", jwtToken);

    try {
         let isVerified = jwt.verify(jwtToken, process.env.MY_SIGNER);
         console.log("isVerified==> ", isVerified);
         let userData = await DB.findOne({email: isVerified.email}).select({password: 0});

         req.user= userData;
         req.token = token;
         req.userID = userData._id;

         next();
    } catch (error) {
        return resp.send({mes: "token is not match"})
    }
     
}

module.exports = checkToken;