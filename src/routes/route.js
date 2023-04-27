const express = require('express')
const router = express.Router()
const bookControl= require("../controller/bookControl.js")
const bookSchema=require("../models/bookSchema.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBookEntry",  bookControl.createBook  )

router.get("/getBookList",  bookControl.getBookList)

module.exports = router