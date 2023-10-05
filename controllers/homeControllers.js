const { BlogPost, User } = require('../models');

module.exports = {
    renderHomePage: async function (req, res) {
        try {
            const dbBlogPosts = await BlogPost.findAll();
            const blogPosts = dbBlogPosts.map((blogPost) => {
                return blogPost.get({ plain: true })
            })
            res.render('homepage', { blogPosts });
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        };
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