const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const getPublisher=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body[0]

    let  authorId=book.author_id
    let publisherId=book.publisher_id
    let msg =""
    
console.log(authorId)
const publishPresent = await getPublisher.findById(publisherId)
const authorPresent = await authorModel.findById(authorId)

    if (authorId) {
        if(!authorPresent)msg ="Author is not present in the DB"
    }
    else msg="author Id is needed"

    if(!publisherId) 
    msg = "publisher id is needed"
    else if (!publishPresent)msg="Publisher is not present in the DB"
    

    if(msg==""){
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})}
else 
    res.send({data: msg})
}

 

const getBooks = async function (req, res) {
    let updated=await bookModel.find().populate('author_id',).populate('publisher_id')
    res.send({data:updated})

}

const modifyData= async function(req,res){

   let update =await bookModel.updateMany({},{$set:{isHardCover:false}})

     const x =  await bookModel.updateMany({ publisher: { $in: ['Penguin', 'HarperCollins'] } },
       { $set: { isHardCover: true } })
       

    const authorIds = await authorModel.find({ rating: { $gt: 3.5 } }).distinct('_id');
    await bookModel.updateMany(
      { author: { $in: authorIds } },
      { $inc: { price: 10 } }
    );
   res.send(update)
}

module.exports.createBook= createBook
module.exports.getBooks = getBooks
module.exports.modifyData=modifyData