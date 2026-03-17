require('dotenv').config();//to load environment variables from a .env file into process.env
const app = require('./src/app');// we import the app module that we created in app.js
const connectDB = require('./src/config/database');// we
const { resume, selfDescription, jobDescription } = require('./src/services/temp');


connectDB();// we call the connectDB function to establish a connection to the database


app.listen(3000, () => {
    console.log('Server is running on port 3000');// we start the server and listen on port 3000
    //when the server is successfully started, it will log a message to the console
});