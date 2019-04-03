
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userDetails', (table) => {
    table.increments('id').primary()
    table.string('website')
    table.string('photo')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userDetails')
};
