let express = require('express');
let service = require('../controllers/auth_serevice') 
let router = express.Router();

// ==========service -----------
router.route('/list').get(service);

module.exports = router;