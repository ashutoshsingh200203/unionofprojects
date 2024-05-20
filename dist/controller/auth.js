"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goHome = exports.doLogout = exports.doGenerate = exports.saveForgot = exports.showForgot = exports.saveLogin = exports.showLogin = exports.savePassword = exports.createPassword = exports.saveRegister = exports.showRegister = void 0;
const connection_1 = __importDefault(require("../config/connection"));
const md5_1 = __importDefault(require("md5"));
// const md5 = require('md5');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const jwt = require('jsonwebtoken');
// import {isVerified} from '../middleware/verification'
const { isVerified } = require("../middleware/verification");
const showRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.cookies);
        if (req.cookies.token)
            res.render('home');
        res.render('register');
    }
    catch (error) {
        console.log(error);
    }
});
exports.showRegister = showRegister;
const saveRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        let { fname, lname, email } = req.body;
        let salt1 = '';
        let accesskey = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 12) {
            salt1 += characters.charAt(Math.floor(Math.random() * charactersLength));
            accesskey += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        let salt = salt1.slice(0, 4);
        let query = `insert into users (fname,lname,email,salt,accesskey) values (?,?,?,?,?)`;
        let result = yield connection_1.default.promise().query(query, [fname, lname, email, salt, accesskey]);
        let insertedId = result[0].insertId;
        res.status(200).json({ insertedId, accesskey, salt });
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveRegister = saveRegister;
const createPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let insertedId = req.query.id;
        let accesskey = req.query.accesskey;
        let salt = req.query.salt;
        var isvalid = true;
        let data = yield connection_1.default.promise().query(`select * from users where uid = '${insertedId}'`);
        console.log(data);
        var expiry = new Date().valueOf() - data[0][0].created_at.valueOf();
        let hours = Math.floor(expiry / (1000 * 60 * 60));
        if (accesskey !== data[0][0].accesskey)
            isvalid = false;
        console.log(isvalid);
        res.render('password', { hours, accesskey, salt, insertedId, isvalid });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createPassword = createPassword;
const savePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { pass, cpass, salt, id } = req.body;
        let encrypted = (0, md5_1.default)(`${cpass}${salt}`);
        console.log(`${cpass}${salt}`);
        let query = `update users set pass = '${encrypted}', created_at = now() where uid=${id}`;
        let result = yield connection_1.default.promise().query(query);
        res.json({ msg: "Congratulations Account Created Successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.savePassword = savePassword;
const showLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('login');
    }
    catch (error) {
        console.log(error);
    }
});
exports.showLogin = showLogin;
const saveLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { loginmail, loginpass } = req.body;
        let query = `select * from users where email = '${loginmail}'`;
        let result = yield connection_1.default.promise().query(query);
        // console.log(result) ;
        if (result[0].length === 0)
            res.json({ msg: 'Invalid username or password' });
        let decrypt = (0, md5_1.default)(`${loginpass}${result[0][0].salt}`);
        console.log(`${loginpass}${result[0][0].salt}`);
        // console.log(result[0][0].salt)
        // console.log(decrypt)
        const uid = result[0][0].uid;
        if (decrypt === result[0][0].pass) {
            const token = jsonwebtoken_1.default.sign({ uid }, process.env.SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });
            console.log('mwesage');
            res.json({ msg: 'Login successfully', token: token });
        }
        else {
            res.json({ msg: "Invalid username or password" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveLogin = saveLogin;
const showForgot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('forgot');
    }
    catch (error) {
        console.log(error);
    }
});
exports.showForgot = showForgot;
const saveForgot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { emailId } = req.body;
        let query = `select * from users where email = '${emailId}'`;
        let result = yield connection_1.default.promise().query(query);
        console.log(result);
        if (result[0].length !== 0) {
            res.json({ msg: `http://localhost:5900/pass/?id=${result[0][0].uid}&accesskey=${result[0][0].accesskey}&salt=${result[0][0].salt}` });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveForgot = saveForgot;
const doGenerate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id, accesskey, salt } = req.query;
        let accesskey2 = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 12) {
            accesskey2 += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        let query = `select * from users where accesskey = '${accesskey}'`;
        let query1 = `update users set accesskey = '${accesskey2}' , created_at = now() where accesskey = '${accesskey}'`;
        let result = yield connection_1.default.promise().query(query1);
        res.send(`<div>Click this <a href='http://localhost:5900/pass?id=${id}&accesskey=${accesskey2}&salt=${salt}'>http://localhost:5900/pass?id=${id}&accesskey=${accesskey2}&salt=${salt}</a> for the verification </div>`);
    }
    catch (error) {
        console.log(error);
    }
});
exports.doGenerate = doGenerate;
const doLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie('token');
        res.redirect('login');
    }
    catch (error) {
        console.log(error);
    }
});
exports.doLogout = doLogout;
const goHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('home');
    }
    catch (error) {
        console.log(error);
    }
});
exports.goHome = goHome;
