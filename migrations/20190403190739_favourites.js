exports.up = function (knex, Promise) {
  return knex.schema.createTable('favourites', (table) => {
    table.integer('users_id')
    table.integer('favourite_id')
  })
}


exports.down = function (knex, Promise) {
  return knex.schema.dropTable('favourites')
};