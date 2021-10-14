const router = require('express').Router();
const blogRoutes = require('./blogRoute');
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoute');

router.use('/blog', blogRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;