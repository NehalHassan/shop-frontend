const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  promotions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }],

});

productSchema.index({ promotions: 1 });

module.exports = mongoose.model('Product', productSchema);
