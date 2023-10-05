const router = require('express').Router();
const { renderHomePage, renderDashboard, renderLoginPage } = require('../controllers/homeControllers')

router.route('/')
    .get(renderHomePage);

router.route('/dashboard')
    .get(renderDashboard);

router.route('/login')
    .get(renderLoginPage);


module.exports = router;