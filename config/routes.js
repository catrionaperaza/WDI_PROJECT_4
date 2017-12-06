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
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/dinners')
  .get(dinners.index)
  .post(secureRoute, dinners.create);

router.route('/dinners/:id')
  .get(dinners.show)
  .put(secureRoute, dinners.update)
  .delete(secureRoute, dinners.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
