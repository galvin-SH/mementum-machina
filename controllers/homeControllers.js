const { BlogPost, User } = require('../models');

module.exports = {
    renderHomePage: async function (req, res) {
        try {
            const dbBlogPosts = await BlogPost.findAll({
                include: [{ model: User, attributes: ['username'] }],
            });
            const blogPosts = dbBlogPosts.map((blogPost) => {
                return blogPost.get({ plain: true });
            });
            return res.render('homepage', { blogPosts });
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
    renderDashboard: async function (req, res) {
        try {
            const { id } = req.session.user_id;
            const dbBlogPosts = await BlogPost.findAll({
                where: { id: id },
            });
            const blogPosts = dbBlogPosts.map((blogPost) => {
                return blogPost.get({ plain: true });
            });
            return res.render('dashboard', { blogPosts });
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
    renderLoginPage: async function (req, res) {
        try {
            return res.render('login');
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
};
