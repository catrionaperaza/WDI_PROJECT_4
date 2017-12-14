const router = require('express').Router();
const dinners  = require('../controllers/dinners');
const users = require('../controllers/users');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const comments = require('../controllers/comments');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(secureRoute, users.index);

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/dinners')
  .all(secureRoute)
  .get(dinners.index)
  .post(dinners.create);

router.route('/dinners/:id')
  .all(secureRoute)
  .get(dinners.show)
  .put(dinners.update)
  .delete(dinners.delete);

//COMMENTS
router.route('/dinners/:id/comments').post(comments.create);
router.route('/dinners/:id/comments/:commentId').delete(comments.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
