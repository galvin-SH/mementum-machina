// npm package imports
const { Model, DataTypes } = require('sequelize');

// import sequelize connection
const sequelize = require('../utils/connection')

class BlogPost extends Model { };

BlogPost.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
            },
        },
        // author: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
    }
);

module.exports = BlogPost;