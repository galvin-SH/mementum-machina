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

module.exports = sess;