const {BlogPost} = require('../models');

const postData = [
    {
        title:'Example Title 1',
        content:'A longer string of content to fill more space on the page'
    },
    {
        title:'Example Title 2',
        content:'A longer string of content to fill more space on the page'
    },
    {
        title:'Example Title 3',
        content:'A longer string of content to fill more space on the page'
    },
    {
        title:'Example Title 4',
        content:'A longer string of content to fill more space on the page'
    },
    {
        title:'Example Title 5',
        content:'A longer string of content to fill more space on the page'
    },
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;