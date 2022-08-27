const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')



//Load env vars
dotenv.config({ path:'./config/config.env' });

//connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps')

//initialize app with express
const app = express();

//Dev logging middleware
// app.use(logger);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );


