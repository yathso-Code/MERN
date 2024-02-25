let Db = require("../models/user_contact_model");

let contact = async (req, resp) => {
    try {
        let { username, email, message } = req.body;

        let x = await Db.create({ username, email, message });
        resp.json({ message: x });
    } catch (err) {
        console.log("home page => ", err);
    }
}

module.exports = contact;
