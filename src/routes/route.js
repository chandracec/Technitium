const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

//creating document
router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor )

//accessing document
router.get("/getBooksData", BookController.getBooksData)

//updating some data
router.get("/updatesBooks",BookController.updateBooks)

//accesssing document
router.get("/getAuthorName", BookController.getAuthorName)
 

 


module.exports = router;