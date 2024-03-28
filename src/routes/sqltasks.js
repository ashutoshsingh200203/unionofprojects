const express = require('express');
const { studentData, attendanceGrid } = require('../controller/sqltasks');
const router = express.Router();

router.route('/studentdata').get(studentData);
router.route('/attendancegrid').get(attendanceGrid)

module.exports = router ;