const { query } = require("express")
const book= require("../models/bookSchema")

const createBook= async function (req, res) {
    let data= req.body
    let bookData= await book.create(data)
    res.send({msg: bookData})
}
//***************************************************************************************** */

const getBookList= async function (req, res) {

    let allBook= await book.find({}, { authorName: 1, bookName: 1, _id: 0 })
    res.send({msg:allBook})
}
//****************************************************************8 **************************/

const  getBooksInYear= async function (req, res) {
    let yearIn =parseInt(req.body)
    let allBookInYear= await book.find({year:{$eq:1800}})
    res.send({msg: allBookInYear})
}

//********************************************************************** *************************/
const getParticularBooks = async function (req, res) {
    let bookQuery = req.body;
    let query1 = bookQuery[0];
    let prop = Object.keys(query1)[0];
    console.log(prop);
    let value = query1[prop];
    console.log(value);
    let query = {};
    query[prop] = value;
    let allBook = await book.find(query);
    res.send({ msg: allBook });
  };
  

//**************************************************************************888***********888888*** */
const  getXINRBooks= async function (req, res) {
    let allBook= await book.find({ 'price.indianPrice': { $in: [100, 200, 500] }})
 
    res.send({msg: allBook})
}
//****************************************************************************** */

const  getRandomBooks= async function (req, res) {
    let allBook= await book.find({$or: [
        { 'totalPgaes': 500},
        { 'stockAvailable': true }]})
    res.send({msg: allBook})
}

module.exports = {createBook,getBookList,getBooksInYear,getParticularBooks,getXINRBooks,getRandomBooks}