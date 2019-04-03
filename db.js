const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  addProfile: addProfile,
  updateUser: updateUser
}


function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
  .join('profiles', 'users.id', '=', 'profiles.user_id')
  .where('users.id', id)
  .first()
}

function addUser(userObj, db = connection) {
  return db('users').insert(userObj)
}
function addProfile(profileObj, db = connection) {
  return db('profiles').insert(profileObj)
}

function updateUser(id, profile_id, db = connection) {
  return db('users')
  .where('users.id', '=', id)
  .update('users.profile_id', '=', profile_id)
}

