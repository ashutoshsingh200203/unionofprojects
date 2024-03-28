const express = require('express');
const { studentData } = require('../controller/sqltasks');
const router = express.Router();

router.route('/studentdata').get(studentData);

module.exports = router ;