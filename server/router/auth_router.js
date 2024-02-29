let express = require("express");
let router = express.Router();
let {home, register, login, User} = require("../controllers/auth_controller")
let signupSchema = require('../validators/auth_validator');
let validate = require("../middlewarse/validate_middleware");
let checkToken = require('../middlewarse/checkToken');



// ---------home page------------------API
router.route('/').get(home);
// ---------regiter page --------------API
router.route('/register').post(validate(signupSchema), register);
// ---------login page-----------------API
router.route('/login').post(login);
// ============get user data who is login ----------------
router.route('/user').get(checkToken ,User);


module.exports = router;
