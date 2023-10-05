const Sequelize = require('sequelize');

let sequelize;

if (process.env.JSAWSDB_URL) {
    sequelize = new Sequelize(process.env.JSAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        },
    );
};

sequelize.sync({ force: false });
console.log('db is connected!')

module.exports = sequelize;