const mongoose = require('mongoose');// we require the mongoose module to interact with MongoDB

async function connectDB() {
    try{await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database");
}
catch(err){
        console.error("Error connecting to Database", err);
    }
};

module.exports = connectDB;// we export the connectDB 