const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Image = sequelize.define("Image", {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    data: {
        type: Sequelize.BLOB('long'),
    }
});

module.exports = Image;
