exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', profile_id: 0},
        {id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', profile_id: 1},
        {id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', profile_id: 2},
        {id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org', profile_id: 3},
        {id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org', profile_id: 4},
        {id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org', profile_id: 5},
        {id: 99907, name: 'Generous Gila Monster', email: 'gila.monster@example.org', profile_id: 6},
        {id: 99908, name: 'Hilarious Heron', email: 'heron@example.org', profile_id: 7},
        {id: 99909, name: 'Intransigent Impala', email: 'impala@example.org', profile_id: 8},
        {id: 99910, name: 'Jocular Jerboa', email: 'jerboa@example.org', profile_id: 9},
        {id: 99911, name: 'Kafkaesque Kinkajou', email: 'kinkajou@example.org', profile_id: 10},
        {id: 99912, name: 'Loquacious Lemur', email: 'lemur@example.org', profile_id: 11},
        {id: 99913, name: 'Misanthropic Mongoose', email: 'mongoose@example.org', profile_id: 12},
        {id: 99914, name: 'Nonchalant Nyala', email: 'nyala@example.org', profile_id: 13},
        {id: 99915, name: 'Ornery Ocelot', email: 'ocelot@example.org', profile_id: 14},
        {id: 99916, name: 'Peaceful Pangolin', email: 'panda@example.org', profile_id: 15},
        {id: 99917, name: 'Querulous Quokka', email: 'quokka@example.org', profile_id: 16},
        {id: 99918, name: 'Resolute Rail', email: 'rail@example.org', profile_id: 17},
        {id: 99919, name: 'Senescent Sloth', email: 'sloth@example.org', profile_id: 18},
        {id: 99920, name: 'Tumultuous Terrapin', email: 'terrapin@example.org', profile_id: 19},
        {id: 99921, name: 'Unassailable Urial', email: 'urial@example.org', profile_id: 20},
        {id: 99922, name: 'Voracious Viscacha', email: 'viscacha@example.org', profile_id: 21},
        {id: 99923, name: 'Wondering Wombat', email: 'wombat@example.org', profile_id: 22},
        {id: 99924, name: 'Xenial Xerus', email: 'xerus@example.org', profile_id: 23},
        {id: 99925, name: 'Yielding Yak', email: 'yak@example.org', profile_id: 24},
        {id: 99926, name: 'Zaftig Zebu', email: 'zebu@example.org', profile_id: 25}
      ])
    })
}
