const Sequelize = require('sequelize');

let sequelize;

if (process.env.JSAWSDB_URL) {
    sequelize = new Sequelize({
        host: 'grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        database: 'vkz6kr4to20jhfof',
        username: 'jaurruzde8h6mpo2',
        password: 'lffnhknqfcnhlxdz',
        dialect: 'mysql',
        port: 3306,
    });
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}

module.exports = sequelize;
