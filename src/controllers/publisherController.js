const publisher = require("../models/publisherModel")

const createPublisher=async function(req,res){
    let publi=req.body
    let savedData= await publisher.create(publi)
    res.send({data:savedData})
}
const getPublisher=async function(req,res){
    let getPubli= await publisher.find()
    res.send({data:getPubli})
}


module.exports.createPublisher=createPublisher
module.exports.getPublisher=getPublisher