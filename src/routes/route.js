const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
 
const auth = require("../middleware/auth")

//createuser
router.post("/users", userController.createUser)
//loginuser
router.post("/login", userController.loginUser)

//getUserData
router.get("/users/:userId",auth.validation, auth.authentication,auth.authorisation, userController.getUserData)
//ModifyUserData
router.put("/users/:userId",  auth.authentication,auth.authorisation,userController.updateUser)
//DeleteUser
router.delete('/users/:userId', auth.authentication,auth.authorisation, userController.deleteUser)

module.exports = router;