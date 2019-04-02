const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)



function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getProfileInfoByUser (userName, db = connection) {
  return db('profiles')
    .join('users', 'profiles.user_id', '=',  'users.id')
    .where('users.name', '=', userName)
    .select()
}


module.exports = {
  getUser,
  getUsers,
  getProfileInfoByUser
}