const router = require('express').Router();
const dinners  = require('../controllers/dinners');
const users = require('../controllers/users');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  // .all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/dinners')
  // .all(secureRoute)
  .get(dinners.index)
  .post(secureRoute, dinners.create);

router.route('/dinners/:id')
  // .all(secureRoute)
  .get(dinners.show)
  .put(dinners.update)
  .delete(dinners.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
