const express = require('express');
const lodash = require('lodash')
const { route } = require('express/lib/application');

const router = express.Router();

const common = require('./common')
const logger = require('../logger/logger.js')
const {printDate,printMonth,batchInfo}= require('../util/helper.js')
const {trim, changeTolowerCase,changeToUpperCase} =require('../validator/formatter')

//route starts
router.get('/test-me', function (req, res) {
    //QUESTION 1
    console.log(logger)
    //QUESTION 2
    console.log("****************************************************************************")
    console.log(`Today is ${printDate()}`,`of ${printMonth()}`,batchInfo())
    //QUESTION 3
    console.log("****************************************************************************")
    console.log(trim(),changeTolowerCase(),changeToUpperCase())
    //QUESTION 4
    console.log("*****************************************************************************************")
    console.log("Below shows the use of CHUNK method of Lodash")
    const yearName =["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    console.log(lodash.chunk(yearName,4))

    console.log("Below shows the use of tail method of Lodash")
    const arr =[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(arr))

    console.log("Below shows the use of UNION method of Lodash")
    const arr1=[1,2,3,2,1]
    const arr2=[1,2,3,3,1]
    const arr3=[1,2,3,4,1,2,3]
    const arr4=[1,2,3,5,1,2]
    const arr5=[1,2,3,6,1,7,8,9,2]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

    
    console.log("Below shows the use of FROMPAIRS method of Lodash")
    const arrayPair = [  ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"]
  ];
  console.log(lodash.fromPairs(arrayPair))

 
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log("This is console of this request", common())
    res.send('My first  api!')
});

module.exports = router