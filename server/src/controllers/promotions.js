const Promotion = require('../models/promotion');

exports.getPromotion = async (req, res) => {
  const promotions = await Promotion.find({}, { code: 1 });
  console.log('promotions', promotions);
  try {
    return res.status(200).json(promotions);
  } catch (err) {
    return res.status(500).json(err);
  }
};
