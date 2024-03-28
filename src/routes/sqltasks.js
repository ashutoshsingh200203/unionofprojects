const express = require('express');
const { studentData, attendanceGrid, examData, fullProfile, dynamicQuery } = require('../controller/sqltasks');
const router = express.Router();

router.route('/studentdata').get(studentData);
router.route('/attendancegrid').get(attendanceGrid)
router.route('/examdata').get(examData)
router.route('/examdata/full-profile').get(fullProfile)
router.route('/dynamicquery').get(dynamicQuery)

module.exports = router ;