const mongoose = require('mongoose');

const promotionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  code: String,
  active: Boolean,
  discount: Number,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }],
});

promotionSchema.index({ products: 1 });

module.exports = mongoose.model('Promotion', promotionSchema);
