"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sqltasks_1 = require("../controller/sqltasks");
const router = express_1.default.Router();
router.route('/studentdata').get(sqltasks_1.studentData);
router.route('/attendancegrid').get(sqltasks_1.attendanceGrid);
router.route('/examdata').get(sqltasks_1.examData);
router.route('/examdata/full-profile').get(sqltasks_1.fullProfile);
router.route('/dynamicquery').get(sqltasks_1.dynamicQuery);
router.route('/orderbyui').get(sqltasks_1.orderbyUi);
router.route('/advancedsearch').get(sqltasks_1.advancedSearch);
router.route('/delimetersearch').get(sqltasks_1.delimeterSearch);
module.exports = router;
