const BlogPost = require('./BlogPost');
const User = require('./User');

User.hasMany(BlogPost, {
    foreignKey: 'author_id',
});

BlogPost.belongsTo(User, {
    foreignKey: 'author_id',
});

module.exports = { BlogPost, User };