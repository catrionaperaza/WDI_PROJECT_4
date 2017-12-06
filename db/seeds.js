const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

//REQUIRE & DROP MODELS

const User = require('../models/user');
User.collection.drop();

const Dinner = require('../models/dinner');
Dinner.collection.drop();

User
  .create([{
    name: 'Janis',
    formatted_address: '1 Commercial Street London, E1 6BF',
    username: 'Janis',
    email: 'janis@janis.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'http://www.catster.com/wp-content/uploads/2015/06/cat-happy-eyes-shutterstock_73519210.jpg',
    bio: 'cool cat cool dinners'
  }])
  .then((users)=> {
    console.log(`${users.length} users created`);
    return Dinner
      .create([{
        title: 'Wednesday Night Dinner Bonanza',
        formatted_address: '114 Whitechapel High Street London, E1 7PT',
        image: 'https://images.unsplash.com/photo-1454046931706-e0f055de21d8?auto=format&fit=crop&w=2700&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        avail_places: '3',
        description: 'Midweek food binge!',
        createdBy: users[0]
      }]);
  })
  .then((dinner) => {
    console.log(`${dinner.length} dinner created!`);
  })
  .catch((err)=> {
    console.log(err);
  })
  .finally(()=> {
    mongoose.connection.close();
  });
