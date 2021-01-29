const { Router } = require('express');
const { getForm, register } = require('../controllers/registrationController');

const router = Router();

router.get('/', getForm);
router.post('/', register);

module.exports = router;