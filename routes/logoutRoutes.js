const { Router } = require('express');
const logout = require('../controllers/logoutController');

const router = Router();

router.get('/', logout);

module.exports = router;