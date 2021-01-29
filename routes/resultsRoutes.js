const { Router } = require('express');
const { getResults, setResult } = require('../controllers/resultsController');

const router = Router();

router.get('/', getResults);
router.post('/', setResult);

module.exports = router;