const { User } = require('../models');

const userData = [
    {
        username: 'Me',
        password: '12345678910',
    },
    {
        username: 'Myself',
        password: 'abcdefghijk',
    },
    {
        username: 'I',
        password: 'qwertyuiop',
    },
    {
        username: 'You',
        password: 'asdfghjkl',
    },
    {
        username: 'Them',
        password: 'zxcvbnm,.',
    },
];

const seedUsers = () =>
    User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUsers;
