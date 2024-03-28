const express = require('express');
const { eventTable, kukuCube, rowColumn, sortingTask, ticTactoe } = require('../controller/jstask');
const { isVerified } = require('../middleware/verification');
const router = express.Router() ;

router.route('/eventtable').get(isVerified,eventTable)
router.route('/kukucube').get(isVerified,kukuCube)
router.route('/rowcolumn').get(isVerified,rowColumn)
router.route('/sorting').get(isVerified,sortingTask)
router.route('/tictactoe').get(isVerified,ticTactoe)

module.exports = router ;