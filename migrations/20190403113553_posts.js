
exports.up = function(knex, Promise) {
return knex.schema.createTable('posts', (table) => {
    table.increments('posts_id').primary()
    table.integer('user_id')
    table.string('title')
    table.string('image')
    table.string('content', 3000)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
