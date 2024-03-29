const express = require('express');
const { openForm, saveForm, empList, doUpdate, saveUpdate } = require('../controller/formcrud');
const router = express.Router();

router.route('/').get(openForm)
router.route('/save-form').post(saveForm)
router.route('/emplist').get(empList)
router.route('/update-form/:id').get(doUpdate)
router.route('/save-update').post(saveUpdate)


module.exports = router ;