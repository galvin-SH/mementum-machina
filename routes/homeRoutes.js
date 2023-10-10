const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
    renderHomePage,
    renderDashboard,
    renderLoginPage,
} = require('../controllers/homeControllers');

// get request to '/' will use renderHomepage for the view
router.route('/').get(renderHomePage);

// get request to '/dashboard' will use renderDashboard for the view if withAuth passes, otherwise withAuth will redirect to the login page
router.route('/dashboard').get(withAuth, renderDashboard);

//get request to '/login' will use renderLoginPage for the view
router.route('/login').get(renderLoginPage);

module.exports = router;
