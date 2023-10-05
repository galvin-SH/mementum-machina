const { User } = require('../models');

module.exports = {
    renderHomePage: async function (req, res) {
        try {
            res.render('homepage');
        } catch (error) { console.error(error) };
    },
    renderDashboard: async function (req, res) {
        try {
            res.render('dashboard');
        } catch (error) { console.error(error) };
    },
    renderLoginPage: async function (req, res) {
        try {
            res.render('login');
        } catch (error) { console.error(error) };
    }
}