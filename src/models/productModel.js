const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
{
	name:{type:String},
	category:{type:String},
	price:{type:Number}
}
, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
