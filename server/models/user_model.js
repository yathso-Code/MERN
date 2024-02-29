  let mongoose = require("mongoose");
  const jwt = require("jsonwebtoken");

  let userSchema = new mongoose.Schema({
     username:{
         type: String,
         require: true,
     },
     email:{
         type: String,
         require: true,
     },
     phone:{
         type: String,
         require: true,
     },
     password:{
       type: String,
       require: true,
     },
     
     // -----------admin----------------
     isAdmin:{ 
       type: Boolean,
       default: false
     },
  });







// json web token---------------------------------------------
userSchema.methods.generateToken = async function () {
    try {
        return await jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.MY_SIGNER,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        // console.log("__+>",error);
        resp.json(error)
    }
};

  let DB = new mongoose.model("Users", userSchema )
  module.exports = DB;