let Db = require("../models/user_contact_model");

let contact = async (req, resp) => {
    try {
        let { username, email, message } = req.body;

         await Db.create({ username, email, message });
        resp.json({ message: "message is send" });

    } catch (err) {
        console.log("home page => ", err);
    }
}

module.exports = contact;
