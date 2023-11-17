const router = require('express').Router();
const testRoutes = require('./testRoutes') // remove at deployment
const userRoutes = require('./userRoutes')
const tileRoutes = require('./tileRoutes')


router.use('/tests', testRoutes) // remove at deployment

router.use('/users', userRoutes)
router.use('/tiles', tileRoutes)


module.exports = router;
