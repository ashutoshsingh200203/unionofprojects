import express from 'express'
import { showStep, stepEmplist, saveStep, updateStep, saveStepupdate } from '../controller/ajaxform'
const router = express.Router() ; 

router.route('/').get(showStep)
router.route('/stepemplist').get(stepEmplist)
router.route('/savestep').post(saveStep)
router.route('/updatestep').get(updateStep)
router.route('/savestepupdate').post(saveStepupdate)

module.exports = router ;