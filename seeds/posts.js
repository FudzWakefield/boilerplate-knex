exports.seed = function (knex, Promise) {
    return knex('posts').del()
      .then(function () {
        return knex('posts').insert([
          {user_id: 99902, title: 'First post', image: 'https://launchcatapult.com/wp-content/uploads/2016/01/ccc-blog-placeholder.png', content: 'Hello world!'},
          {user_id: 99902, title: 'Second post', image: 'https://launchcatapult.com/wp-content/uploads/2016/01/ccc-blog-placeholder.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          {user_id: 99902, title: 'Third post', image: 'https://launchcatapult.com/wp-content/uploads/2016/01/ccc-blog-placeholder.png', content: 'The quick brown fox jumps over the lazy dog.'},
          {user_id: 99904, title: 'I am here too!', image: 'https://launchcatapult.com/wp-content/uploads/2016/01/ccc-blog-placeholder.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          {user_id: 99907, title: "Don't forget me...", image: 'https://launchcatapult.com/wp-content/uploads/2016/01/ccc-blog-placeholder.png', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        ])
      })
  }
  