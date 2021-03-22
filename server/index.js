const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js')
var cors = require('cors')
const regisRoute  = require('./routes/api/registration.js');
const welfareRoute  = require('./routes/api/welfare.js')

const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///connect to db
dbConnect();



///to start app
const PORT = process.env.PORT || 4000

app.listen(PORT, (req,res)=>{
    console.log('server is running at', PORT)
})


///Routes
app.use('/api/register', regisRoute)
app.use('/api/welfare', welfareRoute)
