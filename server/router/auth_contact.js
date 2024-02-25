let express = require("express");
const contact = require("../controllers/contact");
let router = express.Router();

// ----------contact---------API----
router.route('/contact').post(contact);

module.exports = router;