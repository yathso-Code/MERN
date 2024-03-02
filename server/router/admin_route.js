let express = require("express")
const usersController = require("../controllers/admin_controller");
let router = express.Router();
let checkToken = require('../middlewarse/checkToken');
let isAdmin = require('../middlewarse/Admin_middleware');

// -------------admin api------------
router.route('/users').get(checkToken ,isAdmin,usersController.users); 
// -------------admin contact api----------------
router.route('/contacts').get(checkToken,isAdmin, usersController.contacts);
// --------------delete user Data----------
router.route('/users/delete:id').delete(checkToken,isAdmin, usersController.userDelete )

module.exports = router;
