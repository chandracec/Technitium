const BookModel= require("../models/bookModel")
const AuthorModel =require("../models/authorModel")

// //1creating document
// //****************************************************************************** */
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

//************************************************************************* */
const getBooksData= async function (req, res) {

    let authId = await AuthorModel.findOne({author_name : "Chetan Bhagat" } )

    let allBooks= await BookModel.find( {author_id : authId.author_id } ,{_id:0})
    if (allBooks.length > 0 )  res.send({msg: allBooks})
    else res.send({msg: "No books found" })
}


//***************************************************************************** */

const updateBooks= async function (req, res) {

    let authId = await BookModel.findOne({name : "Two states"})
//    console.log(authId.author_id)
    if(authId.author_id){
    let authorWithId = await AuthorModel.findOne({author_id:authId.author_id})
    // console.log(authorName)
    let allBooks= await BookModel.findOneAndUpdate( 
        { name: "Two states"} , 
        { $set: {price:100} },
        { new: true } )
     res.send( { msg:{priceOfBook: allBooks.price,nameOfAuthor:authorWithId.author_name}})
    }
    else res.send("Book with this name does not exist")
}
 

 
//*********************************************************************************** */
const getAuthorName = async function(req, res) {

    const books = await BookModel.find({ price: { $gte: 50, $lte: 100 }},{author_id:1,name:1,_id:0});
    const authorIds = books.map(book => book.author_id);
    const authors = await AuthorModel.find({ author_id: { $in: authorIds }},{author_id:1, author_name:1,_id:0});
    
    let data={}
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j <authors.length; j++) {
          if (books[i].author_id == authors[j].author_id) 
            data[books[i].name] = authors[j].author_name
        }

    }
    res.send(data)
  
}
  
module.exports ={createBook,createAuthor,getBooksData,updateBooks,getAuthorName}
