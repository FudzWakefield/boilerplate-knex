const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser,
  getPosts: getPosts
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser(newUser, db = connection) {
  return db('users').insert(newUser)
}

function getPosts(db = connection) {
  return db('users')
    .join('posts', 'users.id', '=', 'posts.users_id')
}


////