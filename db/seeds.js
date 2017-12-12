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
    formatted_address: '29 Islington High St, London N1 9LH',
    username: 'Janis',
    email: 'janis@janis.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'http://www.catster.com/wp-content/uploads/2015/06/cat-happy-eyes-shutterstock_73519210.jpg',
    location: { lat: '51.532903', lng: '-0.10638410000001386' },
    bio: 'cool cat cool dinners',
    attendee: 'yes'
  }])
  .then((users)=> {
    console.log(`${users.length} users created`);
    return Dinner
      .create([{
        title: 'Wednesday Night Dinner Bonanza',
        formatted_address: '29 Islington High St, London N1 9LH',
        location: { lat: '51.532903', lng: '-0.10638410000001386' },
        image: 'https://images.unsplash.com/photo-1505932049984-db368d92fa63?auto=format&fit=crop&w=976&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        avail_places: '3',
        description: 'Midweek food binge!',
        createdBy: users[0]
      },{
        title: 'Thirsty and hungry Thursdays',
        formatted_address: '72 Highgate High St, Highgate, London N6 5HX',
        location: { lat: '51.5709557851283', lng: '-0.148043912362248' },
        image: 'https://images.unsplash.com/photo-1460306855393-0410f61241c7?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        avail_places: '2',
        description: 'Practically the weekend',
        createdBy: users[0]
      },{
        title: 'Afterwork feast',
        formatted_address: '27 Whitechapel Rd, London E1 1DU',
        location: { lat: '51.5166254', lng: '-0.0688211000000365' },
        image: 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        avail_places: '4',
        description: 'Weekend!',
        createdBy: users[0]
      }
      ]);
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
