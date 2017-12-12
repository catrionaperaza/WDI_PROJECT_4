const User = require('../models/user');

function usersIndex(req, res, next) {
  User.find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User.findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      return res.json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User.findById(req.params.id)
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      user = Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(200).json({ message: 'User successfully deleted!' });
    })
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
