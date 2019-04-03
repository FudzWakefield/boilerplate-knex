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
    console.log(posts)
    res.render('posts', {
      posts: posts
    })
  })
})

router.get('/post/create', (req, res) => {
  res.render('create')

})

router.post('/post/create', (req, res) => {

  console.log(req.body)
  db.makePost(req.body)
    .then(res.redirect('/posts'))
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

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  db.getUser(id).
  then(user => {
    console.log({
      user: user
    })
    res.render('user', {
      user: user
    })
  })
})

router.get('/usersfavourites', (req, res) => {
  db.getFavourites(99909)
    .then(fav => {
      console.log(fav)
      res.render('index', {
        fav: fav
      })
    })
})

module.exports = router