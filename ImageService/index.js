const express = require('express');
const app = express();
const multer = require('multer');

//Connect to the db
const sequelize = require('./util/database');

// import routes here
const imageRoutes = require('./routes/imageRoutes');
const {memoryStorage} = require("multer");

// middleware...
app.use(express.json());

// route middlewares
app.use('/api/images', multer({storage: memoryStorage()}).single('file') ,imageRoutes);


sequelize.sync().then(res => {
    console.log(res);
    app.listen(3000);
}).catch(err => {
    console.log(err);
});


