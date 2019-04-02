const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  insertName
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfile (id, db = connection){
  return db('users').join('profile', 'profile.user_id', '=', 'users.id')
  .where('users.id', '=', id).select()
}

function insertName (string, db = connection){
  let name = string.name
  console.log(name)
  return db('users').insert({name: name})
}