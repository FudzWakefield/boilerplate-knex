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

router.get('/profiles/:user_id',(req,res) =>{
  let user_id = req.params.user_id;

  db.getUser(user_id)
  .then(user => {
    console.log(user)
    res.render('profile', user)
  })
  .catch(error => {
    console.log("err: ", error)
    res.send("you fucked up kid")
  })
})


router.get('/addUser', (req, res) => {
  res.render('form')
})

router.post('/addUser', (req, res) => {
  let obj = req.body;
  let userObj = {name: obj.name, email: obj.email}
  let foregnKey = db.addUser(userObj)
  let profileObj = {user_id: foregnKey, about: obj.about, url: obj.url, img_link: obj.img_link}
  db.addProfile(profileObj)
  db.updateUser(foregnKey, profileObj.id)


})


module.exports = router
