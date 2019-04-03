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

router.get('/profile/:id', (req, res) => {
  let userID = req.params.id;
  
  db.getProfile(userID)
    .then(profile => {
      console.log('profile: ', profile);

      res.render('partials/profile', profile)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/adduser', (req, res) => {
  res.render('partials/adduser')
})


router.post('/adduser', async (req, res) => {
  try{
    let newUserProfile = req.body

    let newUser = {
      name: newUserProfile.name,
      email: newUserProfile.email
    }

    let userID = await db.addUser(newUser);
    userID = userID[0]

    let newProfile = {
      website_URL: newUserProfile.website_URL,
      profile_picture: newUserProfile.profile_pic,
      user_id: userID
    }

    
    let profileID = await db.addProfile(newProfile);
    profileID = profileID[0]

    await db.updateUserProfileID(userID, profileID);

    res.redirect('/');
}
catch(err){
  console.log('err: ', err);

}
  
  
})
module.exports = router


// { website_URL: 'www.gandalf.com',
//   profile_picture:
//    'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/220px-Gandalf600ppx.jpg',
//   user_id: [ 99937 ] 
// }
