"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jstask_1 = require("../controller/jstask");
const verification_1 = require("../middleware/verification");
const router = express_1.default.Router();
router.route('/eventtable').get(verification_1.isVerified, jstask_1.eventTable);
router.route('/kukucube').get(verification_1.isVerified, jstask_1.kukuCube);
router.route('/rowcolumn').get(verification_1.isVerified, jstask_1.rowColumn);
router.route('/sorting').get(verification_1.isVerified, jstask_1.sortingTask);
router.route('/tictactoe').get(verification_1.isVerified, jstask_1.ticTactoe);
router.route('/posts').get(verification_1.isVerified, jstask_1.showPosts);
router.route('/posts/:id').get(verification_1.isVerified, jstask_1.showComments);
router.route('/statecities').get(verification_1.isVerified, jstask_1.statesCities);
router.route('/states').get(verification_1.isVerified, jstask_1.showStates);
router.route('/cities/:state_id').get(verification_1.isVerified, jstask_1.showCities);
exports.default = router;
