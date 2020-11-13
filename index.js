const express = require('express');
const app = express();
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
//Connect to the db
const sequelize = require('./util/database');

// middleware
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
sequelize.sync().then(res => {
    console.log(res);
    app.listen(3000);
}).catch(err => {
    console.log(err);
});




