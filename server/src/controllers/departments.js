const Department = require('../models/departments');

exports.getDepartments = async (req, res) => {
  const departments = await Department.find({}, { name: 1 });
  console.log('departments', departments);
  try {
    return res.status(200).json(departments);
  } catch (err) {
    return res.status(500).json(err);
  }
};
