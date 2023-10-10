require('dotenv').config();
const sequelize = require('../utils/connection');
const seedUsers = require('./seedUsers');
const seedPosts = require('./seedPosts');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---------- Database Synced ----------\n');

    await seedUsers();
    console.log('\n------------ Users Seeded -----------\n');

    await seedPosts();
    console.log('\n------------ Posts Seeded -----------\n');

    process.exit(0);
};

seedAll();
