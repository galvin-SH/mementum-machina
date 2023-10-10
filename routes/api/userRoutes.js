const router = require('express').Router();

const {
    createUser,
    loginUser,
    logoutUser,
} = require('../../controllers/userControllers');

// POST PUT and DELETE methods for blogPosts
router.route('/').post(createUser).put(loginUser).delete(logoutUser);

module.exports = router;
