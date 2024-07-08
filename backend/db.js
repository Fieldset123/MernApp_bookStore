const mongoose=require('mongoose');
require('dotenv').config();
//Define the mongoDB connection URL
const mongoURL=process.env.URL||"mongodb://localhost:27017/bookStore";

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;

//Define event listener for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});
db.on('error',(err)=>{
    console.error('MongoDB connection error:',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

//Export the database connection
module.exports=db;