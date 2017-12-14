const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

const dinnerSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  location: { lat: Number, lng: Number },
  formatted_address: { type: String, required: true },
  avail_places: { type: Number, required: true },
  description: { type: String, required: true },
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  guests: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

dinnerSchema.methods.belongsTo = function dinnerBelongTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

dinnerSchema.virtual('shortDescription').get(function () {
  return this.description.substr(0, 100) + '...';
});

dinnerSchema.virtual('shortTitle').get(function () {
  return this.title.substr(0, 20) + '...';
});

module.exports = mongoose.model('Dinner', dinnerSchema);
