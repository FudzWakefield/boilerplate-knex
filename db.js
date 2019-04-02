const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserProfile: getUserProfile
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserProfile (id, db = connection) {
  return db('users').where('id', id)
  .join('profiles', 'users.id', 'user_id')
  .first()

}
