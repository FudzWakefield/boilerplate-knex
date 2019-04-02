const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res)=>{
  let userId = req.params.id
  console.log(userId)
  db.getUser(userId)
   .then(function(user){
    console.log(user)
    res.render('individual', user)
  })
})


module.exports = router

