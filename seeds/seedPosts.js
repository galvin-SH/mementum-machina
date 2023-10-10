const { BlogPost } = require('../models');

const postData = [
    {
        title: 'Example Title 1',
        content: 'A longer string of content to fill more space on the page',
        author_id: 1,
    },
    {
        title: 'Example Title 2',
        content: 'A longer string of content to fill more space on the page',
        author_id: 4,
    },
    {
        title: 'Example Title 3',
        content: 'A longer string of content to fill more space on the page',
        author_id: 2,
    },
    {
        title: 'Example Title 4',
        content: 'A longer string of content to fill more space on the page',
        author_id: 5,
    },
    {
        title: 'Example Title 5',
        content: 'A longer string of content to fill more space on the page',
        author_id: 3,
    },
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;
