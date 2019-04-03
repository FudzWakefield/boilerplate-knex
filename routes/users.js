const express = require('express')
const development = require('../knexfile').development
const knex = require('knex')(development)
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

router.get('/user/:id', (req, res) => {
  let userId = req.params.id
  
  db.getUser(userId)
    .then(user => {
      console.log(user)
      res.render('user', { user: user[0] })
    })

})


module.exports = router
