const express = require('express');

const router = express.Router();

const DepartmentController = require('../controllers/departments');


router.get('/', DepartmentController.getDepartments);


module.exports = router;
