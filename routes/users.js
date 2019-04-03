const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res) => {
  let userId = req.params.id
  console.log(userId)
  db.getUser(userId)
    .then(function (user) {
      console.log(user)
      res.render('individual', user)
    })
})

router.get('/userDetails/:id', (req, res) => {
  let userID = req.params.id;
  console.log(userID)

  db.getUserDetails(userID)
    .then(userDetails => {
      console.log(userDetails)
      res.render('profiles', userDetails)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add',(req,res) =>{
res.render('new-users')
})

router.post('/add',(req,res)=>{
  let newUserProfile = req.body
  let newUser = {
    name: newUserProfile.name,
    email:newUserProfile.email
  }
  let moreInfo = {
    website: newUserProfile.website,
    photo: newUserProfile.photo
  }
  
  db.addNewUser(newUser)
  db.addMoreInfo(moreInfo)
  console.log(moreInfo)
})

module.exports = router

