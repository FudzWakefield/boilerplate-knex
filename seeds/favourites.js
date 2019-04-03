exports.seed = function (knex, Promise) {
  return knex('favourites').del()
    .then(function () {
      return knex('favourites').insert([{
          users_id: 99901,
          favourite_id: 99906,
        },
        {
          users_id: 99901,
          favourite_id: 99902,
        },
        {
          users_id: 99901,
          favourite_id: 99903,
        },
        {
          users_id: 99901,
          favourite_id: 99906,
        },
        {
          users_id: 99904,
          favourite_id: 99906,
        },
        {
          users_id: 99904,
          favourite_id: 99908,
        },
        {
          users_id: 99909,
          favourite_id: 99906,
        },
        {
          users_id: 99909,
          favourite_id: 99910,
        },
        {
          users_id: 99910,
          favourite_id: 99906,
        },
        {
          users_id: 99911,
          favourite_id: 99915,
        },
        {
          users_id: 99913,
          favourite_id: 99906,
        },
        {
          users_id: 99914,
          favourite_id: 99916,
        },
        {
          users_id: 99908,
          favourite_id: 99915,
        },
        {
          users_id: 99915,
          favourite_id: 99914,
        },
        {
          users_id: 99906,
          favourite_id: 99919,
        },
        {
          users_id: 99920,
          favourite_id: 99921,
        },
        {
          users_id: 99923,
          favourite_id: 99925,
        },
        {
          users_id: 99924,
          favourite_id: 99926,
        },
        {
          users_id: 99920,
          favourite_id: 99919,
        },
        {
          users_id: 99917,
          favourite_id: 99915,
        },
        {
          users_id: 99924,
          favourite_id: 99902,
        },
        {
          users_id: 99914,
          favourite_id: 99910,
        },
        {
          users_id: 99915,
          favourite_id: 99913,
        },
        {
          users_id: 99912,
          favourite_id: 99909,
        },
        {
          users_id: 99905,
          favourite_id: 99912,
        },
        {
          users_id: 99912,
          favourite_id: 99906,
        }
      ])
    })
}