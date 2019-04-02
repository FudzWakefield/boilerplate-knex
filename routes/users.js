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

router.get('/user/:id', (req, res) => {
  let id = req.params.id
  
  db.getUserProfile(id)
  .then(user => {
    db.getUserBlogs(user.id)
    .then (posts => {
      console.log(user, posts)
      res.render('profile', {user:user, posts: posts})
    })
  })
  
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/newuser', (req, res) => {
  res.render('newuser')
})

router.post('/newuser', (req, res) => {
  let newUser = req.body;
  db.addUser(newUser)
  .then (
    console.log(newUser),
    res.redirect ('/'))
})

router.get('/posts/:id', (req, res) => {
  let id = req.params.id
  db.showBlogPost (id)
  .then(
    res.render('posts')
  )
})

module.exports = router
