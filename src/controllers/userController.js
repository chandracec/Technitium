const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (abcd, xyz) {
   
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};
//****************************************************************************************************8 */
const loginUser = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password
// console.log(req.body.emailId)

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
 

  let token = jwt.sign(
    {
      userName1:userName,
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


//************************************************************************************************ */


const getUserData = async function (req, res) {

  
  let userId = req.params.userId;console.log(userId)
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  
}; 
//********************************************************************************************* */

const updateUser = async function (req, res) {
   
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
   
console.log(userData)
  let updatedUser = await userModel.findByIdAndUpdate({ _id: userId },  {$set:userData }, { upsert: true});
  res.send({ status: true, data: updatedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
