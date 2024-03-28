const express = require('express');
const { eventTable, kukuCube, rowColumn, sortingTask, ticTactoe } = require('../controller/jstask');
const router = express.Router() ;

router.route('/eventtable').get(eventTable)
router.route('/kukucube').get(kukuCube)
router.route('/rowcolumn').get(rowColumn)
router.route('/sorting').get(sortingTask)
router.route('/tictactoe').get(ticTactoe)

module.exports = router ;