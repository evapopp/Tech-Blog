const router = require('express').Router();
const blogRoutes = require('./blogRoute');

router.use('/blog', blogRoutes);

module.exports = router;