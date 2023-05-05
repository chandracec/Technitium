//sample  middleware to test the functionality

module.exports=function assignmentMW(req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
 
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)//consoling the data
    next()    
}
