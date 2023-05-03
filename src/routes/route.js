const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishcont=require("../controllers/publisherController");

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher",publishcont.createPublisher)
 

router.get('/authorDetails',bookController.getBooks)


router.put('/modifyData',bookController.modifyData)

module.exports = router;