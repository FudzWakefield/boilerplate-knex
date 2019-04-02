const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('home', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', (req, res) => {
  // db.getUsers()
  //   .then(users => {
  //     res.render('profile', {users: users})
  //   })
  let id = req.params.id
  db.getProfile(id)
    .then(users => {
      let viewData = users[0]
    
      res.render('profile', viewData)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', (req,res) => {
  res.render('add')
})

router.post('/add', (req,res) => {
  let userData = req.body;
db.insertName(userData)
.then(
  console.log(userData)
)
res.redirect('/')
  //insert function
})

module.exports = router
