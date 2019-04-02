exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', (table) => {
    table.integer('user_id').primary()
    table.string('name')
    table.string('Image')
    table.string('URL')
  })
}


exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
};