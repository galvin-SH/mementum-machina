const { BlogPost } = require('../models');

module.exports = {
    createPost: async function (req, res) {
        try {
            const { title, content, author_id } = req.body;
            const newBlogPost = await BlogPost.create
                ({ title: title, content: content, author_id: author_id });
            return res.status(200).json(newBlogPost);
        } catch (error) { console.error(error) };
    },
    updatePost: async function (req, res) {
        try {
            const { id } = req.params;
            const { title, content, author_id } = req.body;
            const updatedBlogPost = await BlogPost.update
                ({ title: title, content: content, author_id: author_id }, { where: { id: id } });
            return res.status(200).json(updatedBlogPost);
        } catch (error) { console.error(error) };
    },
    deletePost: async function (req, res) {
        try {
            const { id } = req.params;
            const deletedPost = await BlogPost.destroy
                ({ where: { id: id } });
            return res.status(200).json(deletedPost);
        } catch (error) { console.error(error) };
    }
};