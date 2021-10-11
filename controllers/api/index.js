const router = require('express').Router();
const blogRoutes = require('./blogRoute');
const userRoutes = require('./userRoute');

router.use('/blog', blogRoutes);
router.use('/user', userRoutes);

module.exports = router;