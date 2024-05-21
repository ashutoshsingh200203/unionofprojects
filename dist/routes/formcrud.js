"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const formcrud_1 = require("../controller/formcrud");
const router = express_1.default.Router();
router.route('/').get(formcrud_1.openForm);
router.route('/save-form').post(formcrud_1.saveForm);
router.route('/emplist').get(formcrud_1.empList);
router.route('/update-form/:id').get(formcrud_1.doUpdate);
router.route('/save-update').post(formcrud_1.saveUpdate);
exports.default = router;
