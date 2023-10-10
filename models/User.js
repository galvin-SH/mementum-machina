// npm package imports
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// import sequelize connection
const sequelize = require('../utils/connection');

class User extends Model {
    // Instance methods
    checkPassword(submittedPassword) {
        return bcrypt.compareSync(submittedPassword, this.password);
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [8, 16],
            },
        },
    },
    {
        hooks: {
            // hashes the new users password before storing in the db
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
