const mongoose=require('mongoose');
const bookSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
       type:String,
       required:true 
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
});

const Book=mongoose.model('Book',bookSchema);
module.exports=Book;