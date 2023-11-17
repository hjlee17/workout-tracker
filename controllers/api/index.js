const router = require('express').Router();
// const userRoutes = require('./userRoutes')
const tileRoutes = require('./tileRoute')

router.use('/tiles', tileRoutes)
// user route
// comment route?


module.exports = router;
