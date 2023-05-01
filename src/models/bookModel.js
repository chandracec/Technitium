const mongoose = require('mongoose');


 
const book =new mongoose.Schema({
    name :{type:String,
        required :true,
        unique:true
       },

    author_id:{type:Number,
    required:true},

    price:{type:Number},

    ratings:{type:Number}

    },{timestamps:true})

     
    module.exports = mongoose.model('bookData', book)
 