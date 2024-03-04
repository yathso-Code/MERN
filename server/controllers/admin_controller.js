let DB = require('../models/user_model');
let Db = require('../models/user_contact_model');

// ================fetch the data of user -===================
let users  =async (req, resp)=>{
   try {
        let result = await DB.find().select({password: 0});
         resp.status(200).send(result)
   } catch (error) {
         resp.status(401).send("users is not  found")
   }
}
// ==============fetch the data of contacts==================
let contacts = async (req, resp)=>{
    try {
         let result = await Db.find();
         resp.status(200).send(result);
    } catch (error) {
         resp.status(401).send("contacts not found");
    }
}
// ===========delete the user Data -======================
let userDelete = async (req, resp)=>{
     try {
          let id = req.params.id;
         let x= await DB.deleteOne({_id: id});
         resp.send(x);
     } catch (error) {
          resp.send("user not delete")
     }
}

// ==========delete the contact data --------------------
// ===========delete the user Data -======================
let contactDelete = async (req, resp)=>{
     try {
          let id = req.params.id;
         let x= await Db.deleteOne({_id: id});
         resp.send(x);
     } catch (error) {
          resp.send("user not delete")
     }
}

module.exports = {users, contacts,  userDelete, contactDelete}