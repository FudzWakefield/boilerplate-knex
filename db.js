const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserDetails: getUserDetails
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserDetails(userID, db = connection) {
  // console.log('userID: ', userID);
  return db('users')
    .join('userDetails', 'user_id', '=', 'users.id')
    .where({ 'users.id': userID })
    .select()
  .first()
}