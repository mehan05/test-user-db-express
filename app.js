const express = require('express');
const mongoose = require('mongoose');
const route  =require('./routes/route')
const app = express();
app.use(express.json());
app.use(express.static('./public'))
app.use('/api/v1/user',route);
// app.use('/api/v1/user',route);
const db = require('./db/connect').MongoURI;
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    // useUnifiedTopology:true,
    ssl:true
})
.then(()=>console.log("DB Connected"));

module.exports = app;