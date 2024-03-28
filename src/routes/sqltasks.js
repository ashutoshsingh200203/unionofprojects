const express = require('express');
const { studentData, attendanceGrid, examData, fullProfile } = require('../controller/sqltasks');
const router = express.Router();

router.route('/studentdata').get(studentData);
router.route('/attendancegrid').get(attendanceGrid)
router.route('/examdata').get(examData)
router.route('/examdata/full-profile').get(fullProfile)

module.exports = router ;