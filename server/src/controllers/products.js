const Product = require('../models/products');


exports.getProductsCount = async (req, res) => {
  const { query = {} } = req.body;
  const products = await Product.countDocuments(query);
  console.log('products count', products);
  try {
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getProducts = async (req, res) => {
  const {skip = 0 , limit = 10, query = {}} = req.body;
  const fields = { name: 1, price: 1, promotions: 1, department_id: 1 };
  console.log('query', query);
  const products = await Product.find(query, fields)
    .populate('promotions', ['code', 'active', 'discount'])
    .populate('department_id', ['name'])
    .skip(skip).limit(limit);
  console.log('products', products, products.length);
  try {
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};
