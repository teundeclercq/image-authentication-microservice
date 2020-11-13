const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    //Database
    //user
    //password
    ,{
        // host
        // port
        // dialect
    });

module.exports = sequelize;
