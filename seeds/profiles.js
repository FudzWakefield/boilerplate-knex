exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        {id: 0, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99901},
        {id: 1, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99902},
        {id: 2, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99903},
        {id: 3, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99904},
        {id: 4, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99905},
        {id: 5, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99906},
        {id: 6, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99907},
        {id: 7, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99908},
        {id: 8, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99909},
        {id: 9, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99910},
        {id: 10, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99911},
        {id: 11, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99912},
        {id: 12, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99913},
        {id: 13, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99914},
        {id: 14, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99915},
        {id: 15, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99916},
        {id: 16, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99917},
        {id: 17, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99918},
        {id: 18, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99919},
        {id: 19, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99920},
        {id: 20, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99921},
        {id: 21, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99922},
        {id: 22, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99923},
        {id: 23, website_URL: 'http://www.yahoo.com', profile_picture: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg', user_id: 99924},
        {id: 24, website_URL: 'http://www.google.com', profile_picture: 'http://www.sarkarinaukrisearch.in/wp-content/uploads/2017/02/flower-profile-images.jpg', user_id: 99925},
        {id: 25, website_URL: 'http://www.bing.com', profile_picture: 'https://i.pinimg.com/236x/50/a8/f5/50a8f5672410164d02029418fda5c5f7.jpg', user_id: 99926},

      ])
    })
}