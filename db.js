const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  console.log(id)
  return db('users')
  .join('profile', 'users.id','=', 'profile.id')
  .where({'users.id': id})
}


   
