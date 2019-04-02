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

router.get('/user/:name', (req, res) => {
  let userName = req.params.name

  console.log('This is the user', userName)
  res.render('user',{userName})
  
  // db.getUsers()
  //   .then(users => {
  //     res.render('index', {users: users})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

module.exports = router
