let {Schema, model} = require("mongoose");

let contactSchema = new Schema({
    username:{type: String, require: true},
    email: {type: String, require: true},
    message: {type: String, require: true}
});

let Db = new model("contacts", contactSchema);
module.exports = Db;
