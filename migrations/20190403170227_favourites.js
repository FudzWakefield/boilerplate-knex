
exports.up = function(knex, Promise) {
    return knex.schema.createTable('favourites', (table) => {
        table.integer('favourite_id').primary()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('favourites')
};
