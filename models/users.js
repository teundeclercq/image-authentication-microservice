const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define("User", {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 6,
        max: 255
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
        unique: {
            args: true,
            msg: 'Email address already in use',
        }

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true
            }
        }

    }
})

module.exports = User;
