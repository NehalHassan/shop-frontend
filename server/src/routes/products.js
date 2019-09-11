const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/products');


router.post('/', ProductController.getProducts);

router.post('/count', ProductController.getProductsCount);


module.exports = router;
