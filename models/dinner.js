const mongoose = require('mongoose');

const dinnerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  location: { lat: Number, lng: Number },
  formatted_address: { type: String, required: true },
  place_id: { type: String },
  avail_places: { type: Number, required: true },
  description: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

dinnerSchema.methods.belongsTo = function dinnerBelongTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Dinner', dinnerSchema);
