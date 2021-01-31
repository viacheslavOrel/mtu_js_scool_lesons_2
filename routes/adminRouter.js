const { Router } = require('express');
const { getUsers } = require('../controllers/adminController');

const router = Router();

router.get('/:page', getUsers);

module.exports = router;