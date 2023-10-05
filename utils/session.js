const session = require('express-session');
const sequelize = require('./connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

let sess = {
    secret: process.env.SECRET_KEY,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

sequelize.sync({ force: false });
console.log('db is connected')

module.exports = sess;