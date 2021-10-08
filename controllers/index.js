const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// add routes Ex:
    // const apiRoutes = require('./api');
    // const homeRoutes = require('./home-routes');

    // router.use('/', homeRoutes);
    // router.use('/api', apiRoutes);

module.exports = router;