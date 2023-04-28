const express = require('express')
const router = express.Router()
const bookControl= require("../controller/bookControl.js")
 

router.post("/createBook",  bookControl.createBook  )
router.get("/getBookList",  bookControl.getBookList)
router.post("/getBooksInYear/:year",  bookControl.getBooksInYear)
router.post("/getParticularBooks",  bookControl.getParticularBooks)
router.get("/getXINRBooks",  bookControl.getXINRBooks)
router.get("/getRandomBooks",  bookControl.getRandomBooks )

module.exports = router