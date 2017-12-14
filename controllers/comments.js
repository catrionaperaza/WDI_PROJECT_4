const Dinner = require('../models/dinner');

function commentCreate(req, res, next) {
  Dinner
    .findById(req.params.id)
    .exec()
    .then(dinner => {
      if (!dinner) return res.status(404).json({ message: 'Dinner not found.' });
      req.body.createdBy = req.user.userId;
      dinner.comments.push(req.body); // create an embedded record
      dinner.save();
      // console.log(group);
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
      console.log('userId', req.user.userId);
      console.log('createdbyId', comment.createdBy);
      if (req.user.userId === comment.createdBy) {
        comment.remove();
        dinner.save();
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
