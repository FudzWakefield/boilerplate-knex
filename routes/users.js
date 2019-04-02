const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {
        users: users
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', (req, res) => {
  res.render('add')

})

router.post('/add', (req, res) => {
  console.log(req.body)
  db.addUser(req.body)
    .then(res.redirect('/'))
})

router.get('/posts', (req, res) => {
  db.getPosts().then(posts => {
    console.log(posts)
    res.render('posts', {
      posts: posts
    })
  })
})



module.exports = router