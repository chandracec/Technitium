const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const express = require('express');

const validation = async function (req, res, next) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    // console.log(userId)
    // Return an error if no user with the given id exists in the db
    if (!user) return res.send("No such user exists");

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

//*******************************************************************************88 */

const authentication = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
      // console.log(token)
    //If no token is present in the request header return error
    if (!token)
      return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "swdfasadfdsergfdfg");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

    // Set the decodedToken in the request header
    req.headers.decodedToken=decodedToken

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

//*************************************************************************************** */

const authorisation = function (req, res, next) {
  try {
    let userId = req.params.userId;
    let userLoggedIn = req.headers['decodedToken'].userId
    console.log(userLoggedIn)
    if (userId != userLoggedIn)
      return res.send({
        status: false,
        msg:
          "User logged is not allowed to modify the requested users data",
      });

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = { validation, authentication, authorisation };
