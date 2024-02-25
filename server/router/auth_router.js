let express = require("express");
let router = express.Router();
let {home, register, login} = require("../controllers/auth_controller")
let signupSchema = require('../validators/auth_validator');
let validate = require("../middlewarse/validate_middleware")


// ---------home page------------------API
router.route('/').get(home);
// ---------regiter page --------------API
router.route('/register').post(validate(signupSchema), register);
// ---------login page-----------------API
router.route('/login').post(login);


module.exports = router;
