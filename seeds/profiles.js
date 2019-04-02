exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([{
          user_id: 99901,
          name: 'Ambitious Aardvark',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99902,
          name: 'Bamboozled Baboon',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99903,
          name: 'Curious Capybara',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99904,
          name: 'Dilapuser_idated Duck',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99905,
          name: 'Exuberant Elephant',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99906,
          name: 'Fascinated Flying Fox',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99907,
          name: 'Generous Gila Monster',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99908,
          name: 'Hilarious Heron',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99909,
          name: 'Intransigent Impala',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99910,
          name: 'Jocular Jerboa',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99911,
          name: 'Kafkaesque Kinkajou',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99912,
          name: 'Loquacious Lemur',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99913,
          name: 'Misanthropic Mongoose',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99914,
          name: 'Nonchalant Nyala',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99915,
          name: 'Ornery Ocelot',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99916,
          name: 'Peaceful Pangolin',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99917,
          name: 'Querulous Quokka',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99918,
          name: 'Resolute Rail',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99919,
          name: 'Senescent Sloth',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99920,
          name: 'Tumultuous Terrapin',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99921,
          name: 'Unassailable Urial',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99922,
          name: 'Voracious Viscacha',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99923,
          name: 'Wondering Wombat',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99924,
          name: 'Xenial Xerus',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99925,
          name: 'Yielding Yak',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        },
        {
          user_id: 99926,
          name: 'Zaftig Zebu',
          image: './images/bobby.jpg',
          URL: 'https://en.wikipedia.org/wiki/Primary_extension'
        }
      ])
    })
}