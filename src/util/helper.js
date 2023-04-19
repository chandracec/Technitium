const date = new Date()

const printDate=function printDate () {return date.getDate()}
 const printMonth=function printMonth () { return date.toLocaleString('default', { month: 'long' });}

const batchInfo=function batchInfo() {
  return " and Technetium batch  Week 5 Day 3 the topic for today discussion is Node.js module system  and routes handling"
}



module.exports ={printDate,printMonth,batchInfo}
