exports.up = (knex, Promise) => {
  return knex.schema.createTable('profile', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.string('Image')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profile')
}
