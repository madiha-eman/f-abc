const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const dbConnect = require('./config/db.js')
var cors = require('cors')
const dotenv = require('dotenv')
const app = express();
dotenv.config();

///connect to db
dbConnect();



///to start app
const PORT = process.env.PORT || 4000

app.listen(PORT, (req,res)=>{
    console.log('server is running at', PORT)
})

