exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        {id: 1, user_id: 99901, URL: '', profile_picture: "/images/", blurb: "I shall eat ALL the ants"},
        {id: 2, user_id: 99902, URL: '', profile_picture: "/images/", blurb: "I'm confused about the red bums"},
        {id: 3, user_id: 99903, URL: '', profile_picture: "/images/", blurb: "Why am I so much larger than the guinea pigs!?"},
        {id: 4, user_id: 99904, URL: '', profile_picture: "/images/", blurb: "The water isn't even running off my back anymore"},
        {id: 5, user_id: 99905, URL: '', profile_picture: "/images/", blurb: "Look at my glorious TUSKS"},
      ])
    })
}