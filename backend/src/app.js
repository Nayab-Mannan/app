const mongoose = require('mongoose')
const express = require('express')
const bodyParser =require('body-parser')
const userController = require('../controller/user.controller')
const app = express()

mongoose.connect("mongodb://localhost:27017/NewDataBase", {
    useNewUrlParser: true,
   
  }) 
  .then(()=>console.log("connection successfull"))
  .catch((err)=>console.log(err));
  app.use(bodyParser())

  app.post('/create',userController.createUser)

  app.get('/getData', async(req,res) => {
    console.log(req.body);
  })

  app.listen(4000, console.log("Server is listning from PORT 4000"))








