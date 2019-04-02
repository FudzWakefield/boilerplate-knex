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

  db.getProfileInfoByUser(userName)
    .then((user) => {
      console.log("Womble for view: ", user)
      res.render('user', user[0])
    })
    .catch((err) => {
      res.status(500).send(err)
}) 

  // db.getUsers()
  //   .then(users => {
  //     res.render('index', {users: users})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

module.exports = router
