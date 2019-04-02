exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([{
          users_id: 99901,
          name: 'Ambitious Aardvark',
          title: 'the weather',
          content: 'is amazing'
        },
        {
          users_id: 99902,
          name: 'Bamboozled Baboon',
          title: 'baboon@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99903,
          name: 'Curious Capybara',
          title: 'capybara@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99904,
          name: 'Dilapusers_idated Duck',
          title: 'duck@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99905,
          name: 'Exuberant Elephant',
          title: 'elephant@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99906,
          name: 'Fascinated Flying Fox',
          title: 'flying.fox@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99907,
          name: 'Generous Gila Monster',
          title: 'gila.monster@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99908,
          name: 'Hilarious Heron',
          title: 'heron@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99909,
          name: 'Intransigent Impala',
          title: 'impala@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99910,
          name: 'Jocular Jerboa',
          title: 'jerboa@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99911,
          name: 'Kafkaesque Kinkajou',
          title: 'kinkajou@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99912,
          name: 'Loquacious Lemur',
          title: 'lemur@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99913,
          name: 'Misanthropic Mongoose',
          title: 'mongoose@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99914,
          name: 'Nonchalant Nyala',
          title: 'nyala@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99915,
          name: 'Ornery Ocelot',
          title: 'ocelot@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99916,
          name: 'Peaceful Pangolin',
          title: 'panda@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99917,
          name: 'Querulous Quokka',
          title: 'quokka@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99918,
          name: 'Resolute Rail',
          title: 'rail@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99919,
          name: 'Senescent Sloth',
          title: 'sloth@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99920,
          name: 'Tumultuous Terrapin',
          title: 'terrapin@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99921,
          name: 'Unassailable Urial',
          title: 'urial@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99922,
          name: 'Voracious Viscacha',
          title: 'viscacha@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99923,
          name: 'Wondering Wombat',
          title: 'wombat@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99924,
          name: 'Xenial Xerus',
          title: 'xerus@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99925,
          name: 'Yielding Yak',
          title: 'yak@example.org',
          content: 'is amazing'
        },
        {
          users_id: 99926,
          name: 'Zaftig Zebu',
          title: 'zebu@example.org',
          content: 'is amazing'
        }

      ])
    })
}