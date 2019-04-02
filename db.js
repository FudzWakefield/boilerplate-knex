const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  getProfile
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile(userID, db = connection) {
  console.log('userID: ', userID);
  
  return db('users')
  .join('profiles', 'user_id', '=', 'users.id')
  .where({'users.id': userID})
  .select()
  .first()
}

//'*', 'users.id AS user_id', 'profiles.id AS profile_id'