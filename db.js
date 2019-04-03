const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  addProfile: addProfile
}


function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
  .join('profiles', 'users.id', '=', 'profiles.id')
  .where('users.id', id)
  .first()
}

function addUser(user_obj, db = connection) {
  return db('users').insert(user_obj)
}
function addProfile(profile_obj, db = connection) {
  return db('profiles').insert(profile_obj)
}

