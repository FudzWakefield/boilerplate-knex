exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', (table) => {
    table.increments('user_id').primary()
    table.string('photo')
    table.string('url')
})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profile')
}
