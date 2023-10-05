const BlogPost = require('./BlogPost');
const User = require('./User');

// User.hasMany(BlogPost, {
//     foreignKey: 'author',
// });

// BlogPost.hasOne(User, {
//     foreignKey: 'author',
// });

module.exports = { BlogPost, User };