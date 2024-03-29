const express = require('express');
const { showStep, stepEmplist, saveStep, updateStep } = require('../controller/ajaxform');
const router = express.Router() ; 

router.route('/').get(showStep)
router.route('/stepemplist').get(stepEmplist)
router.route('/savestep').post(saveStep)
router.route('/updatestep').get(updateStep)
router.route('/savestep').post(saveStep)

module.exports = router ;