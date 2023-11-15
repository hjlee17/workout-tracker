const router = require('express').Router();

// for test landing page
const testRoute = require('./testRoute');
router.use('/', testRoute);

module.exports = router;