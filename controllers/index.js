const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// for test landing page
const testRoute = require('./testRoute');
router.use('/', testRoute);

module.exports = router;