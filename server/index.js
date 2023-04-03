const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const appointmentModel = require('./models/appointementmodel');
const app = express()
var cors = require('cors')

const path =require('path')

require('dotenv').config()

app.use(cors())

 const userrouuter=require('./routes/userrouter')
 const appointmentrouter=require('./routes/appointementrouter')
mongoose.set('strictQuery', true)



mongoose.connect(process.env.MONGO_URI, err=> err? console.log(err) : console.log('DB is connected ...'))
 app.use(express.json())
 app.use(fileUpload({
    useTempFiles : true,
}));
app.use('/api/users',userrouuter)
app.use('/api/appointements',appointmentrouter)
 app.use(express.static(path.join(__dirname,'./client/build')))
 app.get('*',function(req,res){res.sendFile(path.join(__dirname,'./client/build/index.html'))})

const PORT = process.env.PORT || 7000;
app.listen(PORT, err=> err? console.log(err) : console.log(`Server is running on ${PORT}...`))

