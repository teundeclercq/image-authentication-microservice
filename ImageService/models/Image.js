const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Image = sequelize.define("Image", {
    uuid: {

    },
    name: {

    },
    file: {

    }
});

module.exports = Image;
