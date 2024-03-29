const express = require('express');
const { eventTable, kukuCube, rowColumn, sortingTask, ticTactoe, showPosts, showComments, statesCities, showStates, showCities } = require('../controller/jstask');
const { isVerified } = require('../middleware/verification');
const router = express.Router() ;

router.route('/eventtable').get(isVerified,eventTable)
router.route('/kukucube').get(isVerified,kukuCube)
router.route('/rowcolumn').get(isVerified,rowColumn)
router.route('/sorting').get(isVerified,sortingTask)
router.route('/tictactoe').get(isVerified,ticTactoe)
router.route('/posts').get(isVerified,showPosts)
router.route('/posts/:id').get(isVerified,showComments)
router.route('/statecities').get(isVerified,statesCities)
router.route('/states').get(isVerified,showStates)
router.route('/cities/:state_id').get(isVerified,showCities)

module.exports = router ;