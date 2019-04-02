
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', (table) => {
      table.integer('user_id')
      table.string('website')
      table.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};

