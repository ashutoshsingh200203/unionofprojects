import express from 'express'
import { openForm, saveForm, empList, doUpdate, saveUpdate } from '../controller/formcrud'
const router = express.Router();

router.route('/').get(openForm)
router.route('/save-form').post(saveForm)
router.route('/emplist').get(empList)
router.route('/update-form/:id').get(doUpdate)
router.route('/save-update').post(saveUpdate)


export default router ;