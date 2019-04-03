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
       db.linkUserFavourite(id)
       
        .then(userFav => {
          console.log(user, posts, userFav)
          res.render('profile', {user:user, posts: posts, userFav: userFav})
        })
       
      // res.render('profile', {user:user, posts: posts})
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
    res.redirect ('/'))
})

router.get('/posts/:id', (req, res) => {
  let id = req.params.id
  db.showBlogPost (id)
  .then(post => {
    res.render('posts', {post:post})
  }
  )
})

module.exports = router
