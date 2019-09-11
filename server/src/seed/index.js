const Department = require('../models/departments');
const Promotion = require('../models/promotion');
const Product = require('../models/products');


const promotionsArray = require('./promotions');
const departmentsArray = require('./departments');
const productsArray = require('./products');

Promise.all(
  departmentsArray.map(async(dept) => {
  const checkDept = await Department.find({});
  if(!checkDept.length) {
    try {
      const deptData = new Department(dept);
      await deptData.save()
    } catch (error) {
      console.log(error)
    }
  }
  }),
  promotionsArray.map(async (promotion) => {
    const checkpromotion = await Promotion.find({});
    if (!checkpromotion.length) {
      try {
        const promotionData = new Promotion(promotion);
        await promotionData.save()
      } catch (error) {
        console.log(error)
      }
    }
  }),
  productsArray.map(async (product) => {
    const checkProduct = await Product.find({});
    if (!checkProduct.length) {
      try {
        const productData = new Product(product);
        await productData.save()
      } catch (error) {
        console.log(error)
      }
    }
  }),
);
