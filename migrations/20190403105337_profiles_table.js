
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('about', 1000)
    table.string('url')
    table.string('img_link')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
