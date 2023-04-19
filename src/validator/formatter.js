
const str = "This is        a string"
const trim =function trimData(){return str.trim()}
 
 
 const changeTolowerCase=function lowerCase(){
    const str1 = "This is a lowerCase String"
    return str1.toLowerCase()}

 
const changeToUpperCase =function upperCase(){
    const str2 ="This is an upperCase string"
    return str2.toUpperCase()
}

module.exports ={trim ,changeTolowerCase,changeToUpperCase}