const { Router } = require('express');

const { index } = require('../controllers/homeController')


const router = Router();

router.get('/', index);

module.exports = router;