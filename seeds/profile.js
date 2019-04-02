
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {user_id: 99901, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99902, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99903, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99904, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99905, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99906, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99907, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99908, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99909, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99910, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99911, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99912, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99913, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99914, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99915, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99916, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99917, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99918, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99919, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99920, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99921, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99922, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99923, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99924, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99925, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'},
        {user_id: 99926, photo: 'https://vignette.wikia.nocookie.net/nana/images/d/d4/Nana-Osaki.jpg/revision/latest?cb=20180107024928', url: 'https://nana.fandom.com/wiki/Nana_Osaki'}
      ]);
    });
};
