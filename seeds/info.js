
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 99902, user_id: '1', image: 'https://picsum.photos/200/300/?random'},
        {id: 99901, user_id: '2', image:  'https://picsum.photos/200/300/?random'},
        {id: 99903, user_id: '3', image:  'https://picsum.photos/200/300/?random'},
        {id: 99904, user_id: '4', image:  'https://picsum.photos/200/300/?random'},
        {id: 99905, user_id: '5', image:  'https://picsum.photos/200/300/?random'},
        {id: 99906, user_id: '6', image:  'https://picsum.photos/200/300/?random'},
        {id: 99907, user_id: '7', image:  'https://picsum.photos/200/300/?random'},
        {id: 99908, user_id: '8', image:  'https://picsum.photos/200/300/?random'},
        {id: 99909, user_id: '9', image:  'https://picsum.photos/200/300/?random'},
        {id: 99910, user_id: '10', image:  'https://picsum.photos/200/300/?random'},
        {id: 99911, user_id: '11', image:  'https://picsum.photos/200/300/?random'},
        {id: 99912, user_id: '12', image: 'https://picsum.photos/200/300/?random'},
        {id: 99913, user_id: '13', image:  'https://picsum.photos/200/300/?random'},
        {id: 99914, user_id: '14', image:  'https://picsum.photos/200/300/?random'},
        {id: 99915, user_id: '15', image:  'https://picsum.photos/200/300/?random'},
        {id: 99916, user_id: '16', image:  'https://picsum.photos/200/300/?random'},
        {id: 99917, user_id: '17', image:  'https://picsum.photos/200/300/?random'},
        {id: 99918, user_id: '18', image:  'https://picsum.photos/200/300/?random'},
        {id: 99919, user_id: '19', image:  'https://picsum.photos/200/300/?random'},
        {id: 99920, user_id: '20', image:  'https://picsum.photos/200/300/?random'},
        {id: 99921, user_id: '21', image:  'https://picsum.photos/200/300/?random'},
        {id: 99922, user_id: '22', image:  'https://picsum.photos/200/300/?random'},
        {id: 99923, user_id: '23', image:  'https://picsum.photos/200/300/?random'},
        {id: 99924, user_id: '24', image:  'https://picsum.photos/200/300/?random'},
        {id: 99925, user_id: '25', image:  'https://picsum.photos/200/300/?random'},
        {id: 99926, user_id: '26', image:  'https://picsum.photos/200/300/?random'}
      ])
    })
}
