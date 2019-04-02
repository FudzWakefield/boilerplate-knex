exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.integer('users_id').primary()
    table.string('name')
    table.string('title')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
};