const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {
    

    name: String,
    price: Number,
    rating: Number,

    author_id:{type:mongoose.Schema.Types.ObjectId,
        ref:'newauthor'},
        
    publisher_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "newpublisher"
    },

    isHardCover:{type:Boolean,default:'false'}

}, { timestamps: true });


module.exports = mongoose.model('newbook', bookSchema)
