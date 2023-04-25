const express = require('express');
const router = express.Router();

let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]

router.post("/Voting",function(req,res){
    let votingAge =parseInt(req.query.votingAge)

    let result =persons.filter(e=>e.age>votingAge)
    //console.log(result)

    result.forEach(e=>e.votingStatus=true)
res.send(result)
})
module.exports = router;
