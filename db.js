const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserProfile: getUserProfile,
  addUser: addUser,
  showBlogPost: showBlogPost,
  getUserBlogs: getUserBlogs
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserProfile (id, db = connection) {
  return db('users')
  .where('id', id)
  .join('profiles', 'users.id', 'user_id')
  .first()
}

function addUser (newUser, db = connection) {
  return db('users')
  .insert({
    name: newUser.name,
    email: newUser.email
  })
}

function showBlogPost (id, db = connection) {
  return db('posts')
  //.join('users', 'posts.user_id', 'id')
  .where('posts_id', id)
}

function getUserBlogs (id, db = connection) {
  return db('posts')
  .join('users', 'posts.user_id', 'id')
  .where('users.id', id)
}