const Dinner = require('../models/dinner');

function dinnersIndex(req, res, next) {
  Dinner.find()
    .find()
    .populate('createdBy attendees')
    .exec()
    .then(dinners => res.json(dinners))
    .catch(next);
}

function dinnersCreate(req, res, next) {

  req.body.createdBy = req.currentUser;
  if(req.file) req.body.image = req.file.filename;

  Dinner
    .create(req.body)
    .then(dinner => res.status(201).json(dinner))
    .catch(next);
}

function dinnersShow(req, res, next) {
  Dinner
    .findById(req.params.id)
    .populate('createdBy attendees')
    .exec()
    .then((dinner) => {
      if(!dinner) return res.notFound();
      res.json(dinner);
    })
    .catch(next);
}

function dinnersUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Dinner
    .findById(req.params.id)
    .populate('createdBy attendees')
    .exec()
    .then((dinner) => {
      if(!dinner) return res.notFound();
      dinner = Object.assign(dinner, req.body);
      return dinner.save();
    })
    .then(dinner => res.json(dinner))
    .catch(next);
}

function dinnersDelete(req, res, next) {
  Dinner
    .findById(req.params.id)
    .exec()
    .then((dinner) => {
      if(!dinner) return res.notFound();
      return dinner.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: dinnersIndex,
  create: dinnersCreate,
  show: dinnersShow,
  update: dinnersUpdate,
  delete: dinnersDelete
};
