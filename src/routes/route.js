const express = require('express');
const router = express.Router();
const middleware1 =require('../middleware/middleware1')

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishcont=require("../controllers/publisherController");

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher",publishcont.createPublisher)
 

router.get('/authorDetails',middleware1,bookController.getBooks)


router.put('/modifyData',bookController.modifyData)

module.exports = router;