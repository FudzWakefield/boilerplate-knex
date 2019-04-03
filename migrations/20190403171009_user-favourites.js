
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user-favourites', (table) => {
        table.integer('favourite_id')
        table.integer('user_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user-favourites')
};
