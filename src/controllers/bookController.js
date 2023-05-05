const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const getPublisher=require("../models/publisherModel")
const publisherModel = require("../models/publisherModel")

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
// Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)



const modifyData = async function(req, res) {
 
    // await bookModel.find({},{$set:{ isHardCover: false}})
    const pub =await publisherModel.find({name: { $in: ['Penguin', 'HarperCollins'] } }).select('_id:1')
    // console.log(pub)
    let var1=null
    for (i of pub)
    var1 = await bookModel.updateMany({publisher_id:i._id},{$set:{ isHardCover: true }},{new:true})


    const authorIds = await authorModel.find({ rating: { $gt: 3.5 } })
    .distinct('_id')

     await bookModel.updateMany( { author: { $in: authorIds } },{ $inc: { price: 10 } })

    res.send('update')
  
    }

module.exports.createBook= createBook
module.exports.getBooks = getBooks
 module.exports.modifyData=modifyData