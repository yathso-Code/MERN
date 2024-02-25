let DB = require("../models/user_model")
let bcrypt = require("bcryptjs")
// let generateToken = require("../models/user_model")

// ==============HOME PAGE======================================================
let home = async(req, resp) =>{
    try{
     resp.json({mess: "home page"});
    }catch(err){
       console.log("home page => ", err)
    }
}
// =============-register========================================================
let register = async (req, resp) => {
 try {
     let { username, email, phone, password } = req.body;

     let userExist = await DB.findOne({ email: email });
     //  ----check whether user exists----------------------
     if (userExist) {
         return resp.send("user is already exist ");
     } else {
         // Encrypt the password
         let encPass = await bcrypt.hash(password, 10);
         let userCreated = await DB.create({
             username,
             email,
             phone,
             password: encPass,
         });

         // Get the token using generateToken method
         let token = await userCreated.generateToken();

         resp.status(200).json({
             msg: "account is created",
             userId: userCreated._id.toString(),
             token: token,
         });
     }
 } catch (err) {
     console.log("register page=> ", err);
 }
};
// ==============login=========================================================
let login = async(req, resp)=>{
    try {
        // resp.send(req.body)
        let {email, password} = req.body;
        let userExist = await DB.findOne({ email });
        // check user is exist or not--------
        if(!userExist){
           return resp.send("Invalid Email ")
        }

       // compait password---
       let user = await bcrypt.compare(password, userExist.password);
       console.log(user)
       if(user){
           resp.status(200).json({
               mess: "login in successful",
               token : await userExist.generateToken(),
               userId: userExist._id.toString(),
           })
       }else{
          
           resp.send("invalude password")
       }
       

    } catch (error) {
       resp.status(500).json("internet sever error")
    }
}

module.exports = {home, register, login};