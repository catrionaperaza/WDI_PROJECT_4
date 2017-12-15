const Dinner = require('../models/dinner');

function commentCreate(req, res, next) {
  console.log(res.body);

  req.body.createdBy = req.currentUser;

  Dinner
    .findById(req.params.id)
    .exec()
    .then(dinner => {
      if (!dinner) return res.status(404).json({ message: 'Dinner not found.' });
      dinner.comments.push(req.body);
      return dinner.save();
    })
    .then(dinner => {
      return Dinner.populate(dinner, { path: 'comments.createdBy' });
    })
    .then(dinner => {
      return res.status(201).json(dinner);
    })
    .catch(next);
}

function commentDelete(req, res) {
  Dinner
    .findById(req.params.id)
    .exec()
    .then(dinner => {
      if(!dinner) return res.status(404).json({ message: 'No dinner found!'});
      const comment = dinner.comments.id(req.params.commentId);
      if (req.currentUser.id === comment.createdBy) {
        comment.remove();
        return dinner.save();
      } else {
        return res.status(401).json({ message: 'You are not authorised to delete this comment!'});
      }
    })
    .then(dinner => res.status(200).json(dinner))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  create: commentCreate,
  delete: commentDelete
};
