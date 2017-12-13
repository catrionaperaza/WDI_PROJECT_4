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
    name: 'Victor Peraza',
    formatted_address: 'Wimbledon Station',
    email: 'VicPeraza@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://media.istockphoto.com/photos/laughing-businessman-with-beard-and-blue-tie-in-the-city-picture-id501737478?k=6&m=501737478&s=612x612&w=0&h=canSMXHynB1xi04KqbgGyl0JAB4cNWOlKocqzAW2siY=',
    location: { lat: '51.421413', lng: '-0.205483' },
    bio: 'Hi! My name is Victor, and I am a web developer living in Wimbledon. My family do not live in the UK, they live back home in Peru and although I usually travel back to see them, this year I will not manage to. I heard about this programme and thought that it could be a good experience for me and maybe I can bring some more stories and laughter to the table. Please let me know if you have any questions!',
    attendeeOrHost: 'Attendee'
  }, {
    name: 'Hermes Torres',
    formatted_address: 'Aldgate East',
    email: 'TorrHer@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'http://media.socastsrm.com/wordpress/wp-content/blogs.dir/112/files/2017/04/Missing-Gonick.png',
    location: { lat: '51.515158', lng: '-0.071941' },
    bio: 'Hi, Hermes here, I am looking for a nice family or group of friends to visit at Christmas. Happy to bring a dessert with me, from my home in Argentina! Hope to meet you soon!',
    attendeeOrHost: 'Attendee'
  }, {
    name: 'Carolina Rodriguez',
    formatted_address: 'Clapham Junction',
    email: 'Caroisbest@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'http://images.latin-wife.com/south-american-woman-4.jpg',
    location: { lat: '51.465174', lng: '-0.170811' },
    bio: 'Hello! I am Carolina. I would like to come for dinner with some nice people this Christmas. It is my first year in the UK and I do not know many people here, and the friends I have are all with their families. I would like to make some Venezuelan food for my host family if they wanted. My interests are meeting friends, writing, reading and I work as a librarian. Thanks for reading!',
    attendeeOrHost: 'Attendee'
  }, {
    name: 'Catriona Odwyer',
    formatted_address: 'Wimbledon',
    email: 'Catod@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKDAAAAJDliNmVlNDk1LTg1YmYtNDlkNi04OTBlLThkNmI3Yjk0ZGFlMQ.jpg',
    location: { lat: '51.421413', lng: '-0.205483' },
    bio: 'Hello! I am Catriona. I am looking for some guests to join myself and my family for Christmas this year! Please check out my dinner page for details!',
    attendeeOrHost: 'Host'
  }, {
    name: 'John Roberts',
    formatted_address: 'Canary Wharf station',
    email: 'Johnboy@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl8LkFiEL3CPVkc4IttyWbacY54OBvWWHl4ByUFTGwXCLNGDbug',
    location: { lat: '51.505431', lng: '-0.023533' },
    bio: 'Hi I\'m John! I would love to have some extra people to join my dinner this year, I like to have all my friends over and have a fun evening! Please get in touch if this sounds appealing! ',
    attendeeOrHost: 'Host'
  }, {
    name: 'Katie Clarkson',
    formatted_address: 'Clapham Common',
    email: 'ktclarky@gmail.com',
    password: 'password',
    passwordConfirmation: 'password',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBndsSbkZKNLeGabJt0KH--NNZ0zo_3ZUX6H_pDwgcekfj3dmb5g',
    location: { lat: '51.458452', lng: '-0.149261'},
    bio: 'Hi, Katie here, I have a family of four and two extra chairs at the table! Check out my dinner page and see if you would be interested in joining us! ',
    attendeeOrHost: 'Host'
  }])
  .then((users)=> {
    console.log(`${users.length} users created`);
    return Dinner
      .create([{
        title: 'Christmas dinner with lots of turkey!',
        formatted_address: 'Clapham Common',
        location: { lat: '51.458452', lng: '-0.149261' },
        image: 'https://www.englishandculture.com/hs-fs/hub/98462/file-984264747-jpg/images/how_to_talk_about_your_family_in_english.jpg?t=1433880746000',
        avail_places: '2',
        description: 'Join us for a lovely family Christmas dinner! We would love to invite two extra guests to dinner this year, as we love to meet new people, to learn about different cultures, and to share the joy of Christmas! Please just message if you are living somewhere nearby and if you have any questions',
        createdBy: users[5]
      },{
        title: 'Delicious Christmas dinner in Wimbledon',
        formatted_address: 'Wimbledon Station',
        location: { lat: '51.421413', lng: '-0.205483' },
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BoIsv37YCuFsPHrbMk1JAcaeF51kZsNuHjlzhL6J7GVL6koRog',
        avail_places: '1',
        description: 'Hi, we are welcoming one friend to our house for Christmas dinner. We think this is a great idea, and would love to meet someone new and share our food with you. We tend to eat a lot of vegetables so if you are vegetarian this is no problem. Please let us know if you are interested in joining us!',
        createdBy: users[3]
      },{
        title: 'Yummy XMAS dinner!',
        formatted_address: 'Canary Wharf station',
        location: { lat: '51.505431', lng: '-0.023533' },
        image: 'https://media.gettyimages.com/photos/happy-group-of-friends-at-the-beach-picture-id505259176?b=1&k=6&m=505259176&s=612x612&w=0&h=4rXkNN2ckceLnpeNG7gv1di71MxtFINNMo9kWLZwBLA=',
        avail_places: '4',
        description: 'Lots of friends coming together for a yummy dinner this Christmas! Lots of room for a few others so please get in touch if you live nearby and would be good company! We are very friendly and like to have fun!',
        createdBy: users[4]
      }
      ]);
  })
  .then((dinner) => {
    console.log(`${dinner.length} dinners created!`);
  })
  .catch((err)=> {
    console.log(err);
  })
  .finally(()=> {
    mongoose.connection.close();
  });
