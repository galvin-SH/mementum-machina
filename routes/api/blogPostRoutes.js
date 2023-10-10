const router = require('express').Router();

const {
    createPost,
    updatePost,
    deletePost,
} = require('../../controllers/blogPostControllers');

// POST PUT and DELETE methods for blogPosts
router.route('/').post(createPost).put(updatePost).delete(deletePost);

module.exports = router;
