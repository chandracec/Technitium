const mongoose =require('mongoose')
const bookSchema =new mongoose.Schema({
    bookName :{
    type:String,
     required :true,
     unique:true
    },

    authorName : String,
    
    category : [String],
    year : {
        type : Number,
    }
    },{timestamps:true})
    module.exports = mongoose.model('book', bookSchema)