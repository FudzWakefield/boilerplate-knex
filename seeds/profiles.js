exports.seed = function (knex, Promise) {
    return knex('profiles').del()
      .then(function () {
        return knex('profiles').insert([
          {user_id: 99901, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99902, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99903, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99904, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99905, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99906, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99907, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99908, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99909, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99910, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99911, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99912, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99913, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99914, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99915, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99916, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99917, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99918, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99919, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99920, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99921, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99922, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99923, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99924, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99925, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'},
          {user_id: 99926, website: 'website.com', image: 'https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg'}
        ])
      })
  }
  