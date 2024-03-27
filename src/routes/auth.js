const express = require('express');
const { showForgot,showRegister,saveRegister,saveForgot,savePassword,showLogin,doGenerate,doLogout,saveLogin,createPassword,goHome } = require('../controller/auth');
const { isVerified } = require('../middleware/verification');
const router = express.Router() ;

router.route('/').get(showRegister)
router.route('/save').post(saveRegister)
router.route('/pass').get(createPassword)
router.route('/save-pass').post(savePassword)
router.route('/login').get(showLogin).post(saveLogin)
router.route('/forgot').get(showForgot).post(saveForgot)
router.route('/logout').get(isVerified,doLogout)
router.route('/generate').get(doGenerate)
router.route('/home').get(isVerified,goHome)

module.exports = router ;