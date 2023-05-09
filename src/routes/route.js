const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const auth = require('../middleware/auth');
 
router.post("/users", userController.createUser  )

router.post("/login",auth, userController.loginUser)


router.get("/users/:userId",auth, userController.getUserData)

router.put("/users/:userId", auth,userController.updateUser)

module.exports = router;