const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res){
    let result = myUnderscore.first([11,12,23,44,15], 4)
    console.log('the result is',result)
    res.send('done')
})

router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})
//**********************************************************************************88 */
//ARRAY
const movies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  '12 Angry Men',
  'Schindlers List'
]
//1
router.get('/GET/movies',function(req,res){
  console.log("GET/movies API working")
  res.send(movies)
})
//***************************************************************************************** */
//2

router.get('/GET/movies/:indexNumber',function(req,res){
  console.log("GET/movies/indexNumber API working")
  
  const indexNumber =req.params.indexNumber
  if(indexNumber>(movies.length-1)||indexNumber<0)//3condition check
  res.send("Please enter a valid index number")
  else res.send(movies[indexNumber])
})
//********************************************************************************************* */
 //ARRAY 
const moviesArray = [
  {
    "id": 1,
    "name": "The Shining"
  },
  {
    "id": 2,
    "name": "Incendies"
  },
  {
    "id": 3,
    "name": "Rang de Basanti"
  },
  {
    "id": 4,
    "name": "Finding Nemo"
  }
]
//4
router.get('/GET/films',function(req,res){
  console.log("GET/films API working")
  res.send(moviesArray)
})

//***********************************************************************************8 */
const lengthOfArray =moviesArray.length

//5
router.get('/GET/films/:filmId',function(req,res){
  console.log("GET/films/filmsId API working")

  const filmIdd =parseInt(req.params.filmId)
  const Obj =moviesArray.find(element=>element.id ===filmIdd)
  if(filmIdd>=lengthOfArray||filmIdd<0)
  res.send("Movies with the Id that you have entered does not exist .Please enter valid Id.")
  else 
  res.send(Obj.name)
})
module.exports = router;