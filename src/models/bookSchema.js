const mongoose =require('mongoose')
const bookSchema =new mongoose.Schema({
    bookName :{type:String,
        required :true,
        unique:true
       },
    authorName : {type:String},
    price:{
        indianPrice:{type:Number},
        europeanPrice:{type:Number}
    },
    tags:{String},
    year : {
        type : Number,
    },
    totalPages:{type:Number},
    stockAvailable:{type:Boolean}

    },{timestamps:true})
    module.exports = mongoose.model('book', bookSchema)