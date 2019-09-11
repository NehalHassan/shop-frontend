const express = require('express');

const router = express.Router();

const PromotionsController = require('../controllers/promotions');


router.get('/', PromotionsController.getPromotion);

module.exports = router;
