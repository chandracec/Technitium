const express = require('express')
const router = express.Router()
const bookControl= require("../controller/bookControl.js")
 
 
router.post("/createBook",  bookControl.createBook  )

router.get("/getBookList",  bookControl.getBookList)

module.exports = router