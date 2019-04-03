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

  db.addUser(req.body)
    .then(res.redirect('/'))
})

router.get('/posts', (req, res) => {
  db.getPosts().then(posts => {

    res.render('posts', {
      posts: posts
    })
  })
})


router.get('/post/:id', (req, res) => {
  let id = req.params.id
  db.getPost(id).then(post => {
    console.log(post)
    res.render('post', {
      post: post
    })
  })
})


module.exports = router