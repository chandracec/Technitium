const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { default: mongoose } = require("mongoose");

//**************************************************************************************88 */
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};


//******************************************************************************************* */
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "swdfasadfdsergfdfg"
  );
  
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

//************************************************************************************************** */
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findOne({ _id: userId });
  res.send({ status: true, data: userDetails });
};


//****************************************************************************************************88 */
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: true, data: updatedUser });
};

//****************************************************************************************************** */
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isdeleted:false});
  res.send({ status: true, data: updatedUser });
};




module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser =deleteUser


