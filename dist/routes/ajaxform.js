"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ajaxform_1 = require("../controller/ajaxform");
const router = express_1.default.Router();
router.route('/').get(ajaxform_1.showStep);
router.route('/stepemplist').get(ajaxform_1.stepEmplist);
router.route('/savestep').post(ajaxform_1.saveStep);
router.route('/updatestep').get(ajaxform_1.updateStep);
router.route('/savestepupdate').post(ajaxform_1.saveStepupdate);
module.exports = router;
