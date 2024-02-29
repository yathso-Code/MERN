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
         return resp.json("user is already exist ");
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
            resp.Status(404).json("Invalid Email ")
        }else{

       // compait password---
       let user = await bcrypt.compare(password, userExist.password);
       
       console.log(user)// it give true. if password is match or false
       if(user){
           resp.status(200).json({
               mess: "login in successful",
               token : await userExist.generateToken(),
               userId: userExist._id.toString(),
           })
       }else{
          
           resp.json("invalude password")
       }
    }
       

    } catch (error) {
       resp.status(500).json("email is not found")
    }
}
// --------------------get the data of user who is login-----------------------
let User = async(req, resp)=>{
    try {
        let x= await DB.findById(req.body.id).select({password :0});
        resp.status(200).send(x);
    } catch (error) {
        resp.send("pleace check your token")
    }
}

module.exports = {home, register, login, User};