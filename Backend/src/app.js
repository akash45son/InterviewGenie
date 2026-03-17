const express = require('express');// we require express module
const cookieParser = require('cookie-parser');// 
const cors = require('cors');// we require cors module to enable cross-origin resource sharing

const app = express();// we create an instance of express express is a blue print for building web applications in Node.js

app.use(express.json());// we use the express.json() middleware to parse JSON request bodies
app.use(cookieParser());// we use the cookieParser middleware to parse cookies 
app.use(cors({origin: "http://localhost:5173",
     credentials: true})) 

/* require all the routes here*/
const authRouter = require('./routes/auth.routes');//including all the routes frm authRoutes.js 
const interviewRouter = require('./routes/interview.routes');


/* use the routes here*/
app.use('/api/auth', authRouter);//eg /api/auth/login
app.use('/api/interview', interviewRouter);


module.exports = app;


