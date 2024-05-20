"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
const verification_1 = require("../middleware/verification");
const router = express_1.default.Router();
router.route('/').get(auth_1.showRegister);
router.route('/save').post(auth_1.saveRegister);
router.route('/pass').get(auth_1.createPassword);
router.route('/save-pass').post(auth_1.savePassword);
router.route('/login').get(auth_1.showLogin).post(auth_1.saveLogin);
router.route('/forgot').get(auth_1.showForgot).post(auth_1.saveForgot);
router.route('/logout').get(verification_1.isVerified, auth_1.doLogout);
router.route('/generate').get(auth_1.doGenerate);
router.route('/home').get(verification_1.isVerified, auth_1.goHome);
module.exports = router;
