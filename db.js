const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  updateUserProfileID,
  addUser,
  getProfile,
  addProfile
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUsers (db = connection) {
  return db('users').select()
}

function updateUserProfileID (userID, profileID, db = connection) {
  return db('users')
  .where('id', userID)
  .update( 'profile_id', profileID )
}

function addUser(newUser, db = connection) {
  return db('users')
   .insert(newUser)
 }

function getProfile(userID, db = connection) {
  return db('users')
  .join('profiles', 'user_id', '=', 'users.id')
  .where({'users.id': userID})
  .select()
  .first()
}




function addProfile(newProfile, db = connection) {
  return db('profiles')
   .insert(newProfile)
   
 }


//'*', 'users.id AS user_id', 'profiles.id AS profile_id'