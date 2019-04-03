exports.seed = function (knex, Promise) {
    return knex('user-favourites').del()
      .then(function () {
        return knex('user-favourites').insert([
          {user_id: 99916, favourite_id: 99902},
          {user_id: 99919, favourite_id: 99902},
          {user_id: 99902, favourite_id: 99911},
          {user_id: 99902, favourite_id: 99920},
          {user_id: 99901, favourite_id: 99915},
        ] )
  })
}  