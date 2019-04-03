exports.seed = function (knex, Promise) {
    return knex('favourites').del()
      .then(function () {
        return knex('favourites').insert([
          {favourite_id: 99901},
          {favourite_id: 99902},
          {favourite_id: 99903},
          {favourite_id: 99904},
          {favourite_id: 99905},
          {favourite_id: 99906},
          {favourite_id: 99907},
          {favourite_id: 99908},
          {favourite_id: 99909},
          {favourite_id: 99910},
          {favourite_id: 99911},
          {favourite_id: 99912},
          {favourite_id: 99913},
          {favourite_id: 99914},
          {favourite_id: 99915},
          {favourite_id: 99917},
          {favourite_id: 99918},
          {favourite_id: 99920},
          {favourite_id: 99921},
          {favourite_id: 99922},
          {favourite_id: 99923},
          {favourite_id: 99924}
        ] )
  })
}  