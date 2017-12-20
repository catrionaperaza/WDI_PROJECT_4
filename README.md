Ho Ho Hosts Read-me

Photos to be added in the New Year!

Overview: For the final project of the course, I chose to complete this as a pair with another classmate. As we were at similar levels of ability, there was an added advantage of being able to learn and code together and to consolidate learning from the classes of the final module. We built a full stack MERN (MongoDB, Express.js, React.js, Node.js) app with authentication, and included features such as comments, GoogleMaps API and AutoComplete (which autocompletes the end of addresses when you start typing in your location search) the ability to add guests to an event page etc. We named this app ‘Ho Ho Hosts’ as it is Christmas themed and aims to match up groups of families/friends (i.e. hosts) with extra room at their Christmas dinner with young professionals who live far from home (guests). We gained a better understanding and appreciation of React through developing this app and were delighted with the results.

Idea stage: Several weeks prior to project start, we discussed the idea of creating an app where people with extra space at the Christmas dinner could be matched with people who didn't have plans for Christmas. The idea came from the fact that we have international friends in London who sometimes are unable to travel the long distance home for Christmas, however many of their friends are unavailable as they are spending the holiday with family. The concept would be aimed at professionals who work in London. We specifically decided to base the application around Christmas dinner in London as this would be scalable to other large international cities and for other dinner events/celebrations throughout the year.

Planning: During planning stage of the project, we wireframed and planned together on paper before transferring the content into Trello and Adobe XD. Trello was used to review and divide tasks whilst Adobe XD was used to keep visual of initial design and layout.

Register / Login: In order to encourage user interaction, users must be registered and logged into the site to access it's full functionality. This is presented in standard form format pages where the information can be typed in and submitted.

Homepage: The homepage gives the user a central page overview with their details and which dinners they are attending or hosting. This is the landing page, and they view different content depending on whether they are logged in. They can also click on links to search for dinners or for guests. This allows easy navigation upon logging into the app. In addition, the user always has the ability to update and edit their own profile details, or to return to this homepage as this options are located on the navbar.

Searchable Dinners and Guests based on location: From a user experience perspective, people are familiar with Google Maps, therefore we used the Google map API and AutoComplete as a large feature on the dinner event and guest search page. Users are able to type in a location and find hosted dinner events or guests within a 3 mile radius of selected location.

Create a dinner: Users could create a dinner page, add the location (which would plot it on the map page) add guests from a choice of all users registered (this was achieved by using multi-select.js), and if they were the user who created the dinner, they were given the option to edit or delete their dinner.

Comments: Any user could comment on a dinner page, but only the person who created the comment could edit or delete it.The photo of the user who commented would show up alongside the time it was created.

Challenges: Embedded referencing in React with User as second model/resource, as there were not many examples of this online or from the course due to React being very new, however it was worth the effort to pick it up, as it was then usable on almost every page of the app, e.g. clicking on the host or the guest pages from the dinner page, seeing the dinners you were attending or hosting on your homepage etc.

Meeting MVP (minimum viable product) and knowing when to let go of extra features due to time constraints.

Wins: Building the back end server and first RESTful resource, this was straight forward as at this point we all had built a few applications which meant we felt comfortable with these aspects.

An advantage of working in a pair was that it encouraged the use of branches within GitHub set-up which meant we could work and experiment with code without having to commit and merge until a function was complete and working front end.

Technologies used: This MERN (MongoDB, Express.js, React.js, Node.js) full stack app was developed using JavaScript on front and back end, sending JSON through AJAX requests. I built tests on the front and back end using Mocha, to ensure that all the code was fully functional. We used Trello for planning and deployed the app on Heroku.

Additional Features to Implement: Moving forward with this project, I would love to add instant messaging functionality and image uploads, as I think it would really add to the user experience, while I believe it is extremely scalable, and could be used for any type of event or occasion.

https://ho-ho-hosts.herokuapp.com/
