const book= require("../models/bookSchema")

const createBook= async function (req, res) {
    let data= req.body
    let bookData= await book.create(data)
    res.send({msg: bookData})
}

const getBookList= async function (req, res) {
    let allBook= await book.find()
    res.send({msg: allBook})
}

module.exports.createBook = createBook
module.exports.getBookList= getBookList