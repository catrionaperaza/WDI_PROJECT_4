const router = require('express').Router();
const dinners  = require('../controllers/dinners');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/dinners')
  .get(dinners.index)
  .post(secureRoute, dinners.create);

router.route('/dinners/:id')
  .get(dinners.show)
  .put(secureRoute, dinners.update)
  .delete(secureRoute, dinners.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
