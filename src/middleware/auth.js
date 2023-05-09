const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

 const auth =  async function(req,res,next)
 {
    let token = req.headers["x-auth-token"]
  
 if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");

  if (!decodedToken){
    console.log("if true")
  return res.send({ status: false, msg: "token is invalid" });
  }
  next()

}
module.exports =auth