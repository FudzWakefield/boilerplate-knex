
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userDetails').del()
    .then(function () {
      // Inserts seed entries
      return knex('userDetails').insert([
        {id: 0, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99901},
        {id: 1, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99902},
        {id: 2, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99903},
        {id: 3, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99904},
        {id: 4, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99905},
        {id: 5, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99906},
        {id: 6, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99907},
        {id: 7, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99908},
        {id: 8, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99909},
        {id: 9, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99910},
        {id: 10, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99911},
        {id: 11, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99912},
        {id: 12, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99913},
        {id: 13, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99914},
        {id: 14, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99915},
        {id: 15, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99916},
        {id: 16, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99917},
        {id: 17, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99918},
        {id: 18, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99919},
        {id: 19, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99920},
        {id: 20, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99921},
        {id: 21, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99922},
        {id: 22, website: 'https://www.wwe.com/', photo: 'https://i.pinimg.com/originals/42/6a/68/426a6832718d904e0a21947cc679c489.gif', user_id: 99923},
        {id: 23, website: 'http://www.mmf.co.nz/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Hans_Moleman.png/220px-Hans_Moleman.png', user_id: 99924},
        {id: 24, website: 'https://www.ufc.com/', photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png', user_id: 99925},
        
      ]);
    });
};
