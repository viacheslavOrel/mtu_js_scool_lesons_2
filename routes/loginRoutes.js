const { Router } = require('express');
const { getLoginForm, validateLoginForm } = require('../controllers/loginController');

const router = Router();

router.get('/', getLoginForm);
router.post('/', validateLoginForm);

module.exports = router;