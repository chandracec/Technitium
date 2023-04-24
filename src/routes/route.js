const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

//*******************************************************************************************88 */
///ASSIGN 1

router.get("/sol1", function (req, res) {
  
  let arr= [1,2,3,4,5,6,7,8,9,11]
  let n =arr.length

  let sum=(n+1)*(n+2)/2//sum of 1-N 
  let sum2=0

  for(let i=0;i<n;i++)//find sum of array number
  sum2+=arr[i]

  let missingNumber =sum-sum2

  res.send(  { data: missingNumber }  );
});

//**************************************************************************************8 */
//ASSIGN 2
router.get("/sol2", function (req, res) {
  
  let arr= [33, 34, 35, 37, 38]
  let x=arr[0]
  let n =arr.length
  let missingNumber

  for(let i=0;i<n;i++)//
  { if(arr[i]!=x){//checks if next element is in the same series as previous 
    missingNumber=x//if not then send the number as missing number
    res.send( { data: missingNumber  })
  }
  ++x  
  }

});

//**********************************************************************************************8 */
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   router.post('/players', function (req, res) {

  const newPlayer=req.body
  
  

  if(players.find((element) =>element.name===newPlayer.name)==undefined)
  players.push(newPlayer)
  

    res.send(  { data: players, status: true }  )
})


module.exports =router