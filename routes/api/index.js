const router = require('express').Router();
const blogPostRoutes = require('./blogPostRoutes');
const userRoutes = require('./userRoutes');

router.use('/posts',blogPostRoutes); // api/posts
router.use('/users',userRoutes);     // api/users

module.exports = router;