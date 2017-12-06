const mongoose = require('mongoose');

const dinnerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  lat: { type: Number },
  lng: { type: Number },
  place_id: { type: String },
  avail_places: { type: Number, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

dinnerSchema.methods.belongsTo = function dinnerBelongTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('dinner', dinnerSchema);
