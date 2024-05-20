import express from 'express'
import {studentData, attendanceGrid, examData, fullProfile, dynamicQuery, orderbyUi, advancedSearch, delimeterSearch } from '../controller/sqltasks'
const router = express.Router();

router.route('/studentdata').get(studentData);
router.route('/attendancegrid').get(attendanceGrid)
router.route('/examdata').get(examData)
router.route('/examdata/full-profile').get(fullProfile)
router.route('/dynamicquery').get(dynamicQuery)
router.route('/orderbyui').get(orderbyUi)
router.route('/advancedsearch').get(advancedSearch)
router.route('/delimetersearch').get(delimeterSearch)

module.exports = router ;