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
exports.saveUpdate = exports.doUpdate = exports.empList = exports.saveForm = exports.openForm = void 0;
const connection_1 = __importDefault(require("../config/connection"));
const openForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.render('jobform');
    }
    catch (error) {
        console.log(error);
    }
});
exports.openForm = openForm;
const saveForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        let { tech, php, oracle, mysql, laravel } = req.body;
        let { language, hread, hwrite, hspeak, gwrite, gspeak, gread, ewrite, espeak, eread } = req.body;
        let { fname, lname, designation, email, address1, address2, city, state, zipcode, phone, relationship, gender } = req.body;
        let { refname, refphone, refrel } = req.body;
        let { ectc, cctc, notice, location, dept } = req.body;
        let { compname, desig, todate, fromdate } = req.body;
        let { education, year, percentage } = req.body;
        let query1 = `insert into basic_details2 (fname,lname,designation,email,phone_number,address_1,address_2,city,state,zipcode,relationship,gender) values (?,?,?,?,?,?,?,?,?,?,?,?)`;
        let basic = yield connection_1.default.promise().query(query1, [fname, lname, designation, email, phone, address1, address2, city, state, zipcode, relationship, gender]);
        let insertedId = basic[0].insertId;
        let query = `insert into edu2 (empid,education,year,percentage) values (?,?,?,?)`;
        for (let i = 0; i < education.length; i++) {
            yield connection_1.default.promise().query(query, [insertedId, education[i], year[i], percentage[i]]);
        }
        let query5 = `insert into experience2 (emp_id,compname,designation, from_,to_) values (?,?,?,?,?)`;
        for (let i = 0; i < compname.length; i++) {
            yield connection_1.default.promise().query(query5, [insertedId, compname, desig, todate, fromdate]);
        }
        let query4 = `insert into references2 (emp_id,name_,contact,relation) values (?,?,?,?)`;
        for (let i = 0; i < refname.length; i++) {
            yield connection_1.default.promise().query(query4, [insertedId, refname, refphone, refrel]);
        }
        let query3 = `insert into preferences2 (empid,noticeperiod, location,ectc,cctc,department) values (?,?,?,?,?,?)`;
        yield connection_1.default.promise().query(query3, [insertedId, notice, location, ectc, cctc, dept]);
        language.forEach((e) => __awaiter(void 0, void 0, void 0, function* () {
            if (e === "hindi") {
                if (hread)
                    hread = 1;
                else {
                    hread = 0;
                }
                if (hwrite)
                    hwrite = 1;
                else {
                    hwrite = 0;
                }
                if (hspeak)
                    hspeak = 1;
                else {
                    hspeak = 0;
                }
                let query7 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"hindi",${hspeak},${hread},${hwrite})`;
                yield connection_1.default.promise().query(query7);
            }
            if (e === "gujarati") {
                if (gread)
                    gread = 1;
                else {
                    gread = 0;
                }
                if (gwrite)
                    gwrite = 1;
                else {
                    gwrite = 0;
                }
                if (gspeak)
                    gspeak = 1;
                else {
                    gspeak = 0;
                }
                let query8 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"gujarati",${gspeak},${gread},${gwrite})`;
                yield connection_1.default.promise().query(query8);
            }
            if (e === "english") {
                if (eread)
                    eread = 1;
                else {
                    eread = 0;
                }
                if (ewrite)
                    ewrite = 1;
                else {
                    ewrite = 0;
                }
                if (espeak)
                    espeak = 1;
                else {
                    espeak = 0;
                }
                let query9 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"english",${espeak},${eread},${ewrite})`;
                yield connection_1.default.promise().query(query9);
            }
        }));
        tech.forEach((e) => __awaiter(void 0, void 0, void 0, function* () {
            if (e === "php") {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"php","${php}")`;
                yield connection_1.default.promise().query(techquery1);
            }
            if (e === "oracle") {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"oracle","${oracle}")`;
                yield connection_1.default.promise().query(techquery1);
            }
            if (e === "laravel") {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"laravel","${laravel}")`;
                yield connection_1.default.promise().query(techquery1);
            }
            if (e === "mysql") {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"mysql","${mysql}")`;
                yield connection_1.default.promise().query(techquery1);
            }
        }));
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveForm = saveForm;
const empList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = `select * from basic_details2`;
        const empdata = yield connection_1.default.promise().query(query);
        console.log(empdata);
        res.render('emplist', { empdata });
    }
    catch (error) {
        console.log(error);
    }
});
exports.empList = empList;
const doUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hindi = [], english = [], gujarati = [];
        const php = [], mysql = [], oracle = [], laravel = [];
        let requestId = req.params.id;
        let query = `select * from basic_details2 where emp_id = ${requestId} ;`;
        let query1 = `select * from edu2 where empid = ${requestId}`;
        let query2 = `select * from experience2 where emp_id = ${requestId}`;
        let query5 = `select * from references2 where emp_id = ${requestId}`;
        let query6 = `select * from preferences2 where empid = ${requestId}`;
        let query3 = `select * from languages2 where empid = ${requestId}`;
        let query4 = `select * from techno2 where empid = ${requestId}`;
        let result = yield connection_1.default.promise().query(query);
        let result1 = yield connection_1.default.promise().query(query1);
        let result2 = yield connection_1.default.promise().query(query2);
        let result5 = yield connection_1.default.promise().query(query5);
        let result6 = yield connection_1.default.promise().query(query6);
        let result3 = yield connection_1.default.promise().query(query3);
        let result4 = yield connection_1.default.promise().query(query4);
        console.log(result4);
        result3[0].forEach(e => {
            if (e.lang === "hindi")
                hindi.push(e);
            if (e.lang === "english")
                english.push(e);
            if (e.lang === "gujarati")
                gujarati.push(e);
        });
        result4[0].forEach(e => {
            if (e.tech === "php")
                php.push(e);
            if (e.tech === "oracle")
                oracle.push(e);
            if (e.tech === "mysql")
                mysql.push(e);
            if (e.tech === "laravel")
                laravel.push(e);
        });
        res.render('updateform', { result, result1, result2, result5, result6, result3, hindi, english, gujarati, result4, php, oracle, laravel, mysql });
    }
    catch (error) {
        console.log(error);
    }
});
exports.doUpdate = doUpdate;
const saveUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let empid = req.body.id;
        let { tech, php, oracle, mysql, laravel } = req.body;
        let { language, hread, hwrite, hspeak, gwrite, gspeak, gread, ewrite, espeak, eread } = req.body;
        let { fname, lname, designation, email, address1, address2, city, state, zipcode, phone, relationship, gender } = req.body;
        let { refname, refphone, refrel, refid } = req.body;
        let { ectc, cctc, notice, location, dept } = req.body;
        let { compname, desig, todate, fromdate, workid } = req.body;
        let { education, year, percentage, eduid } = req.body;
        console.log(eduid);
        let query1 = `update basic_details2 set fname = '${fname}',lname = '${lname}' , designation = '${designation}' , email = '${email}' , address_1 = '${address1}' ,
        address_2 = '${address2}' , city = '${city}' , state = '${state}' , zipcode = '${zipcode}' , phone_number = '${phone}' , relationship = '${relationship}' , gender = '${gender}' where emp_id = ${empid} `;
        let basicdetails = yield connection_1.default.promise().query(query1);
        console.log(query1);
        let query2 = `update preferences set location = '${location}' , noticeperiod = '${notice}' , ectc = ${ectc} , cctc= ${cctc} , department= '${dept}' where emp_id = ${empid}`;
        let preferences = yield connection_1.default.promise().query(query2);
        console.log(query2);
        for (let i = 0; i < education.length; i++) {
            if (education[i] != "" && year[i] != "" && percentage[i] != "") {
                let query3 = `update edu2 set education = '${education[i]}' , year = ${year[i]} , percentage = ${percentage[i]} where empid = ${empid} and id =${eduid[i]}`;
                yield connection_1.default.promise().query(query3);
                console.log(query3);
            }
        }
        for (let i = 0; i < refname.length; i++) {
            if (refname[i] != "" && refphone[i] != "" && refrel[i] != "") {
                let query4 = `update references2 set name_ ='${refname[i]}' , contact='${refphone[i]}' , relation = '${refrel[i]}' where emp_id = ${empid} and id= ${refid[i]}`;
                yield connection_1.default.promise().query(query4);
                console.log(query4);
            }
        }
        for (let i = 0; i < compname.length; i++) {
            if (compname[i] != "" && desig[i] != "" && todate != "" && fromdate != "") {
                let query5 = `update experience2 set compname = '${compname[i]}', desig = '${desig[i]}' , todate = '${todate[i]}' , fromdate = '${fromdate}' where emp_id = ${empid} and id=${workid[i]}`;
                console.log(query5);
            }
        }
        for (let i = 0; i < tech.length; i++) {
            if (tech[i] === "php") {
                let query6 = `update techno2 set level = '${php}' where empid = ${empid} and tech = 'php'`;
                yield connection_1.default.promise().query(query6);
            }
            if (tech[i] === "oracle") {
                let query6 = `update techno2 set level = '${oracle}' where empid = ${empid} and tech = 'oracle'`;
                yield connection_1.default.promise().query(query6);
            }
            if (tech[i] === "laravel") {
                let query6 = `update techno2 set level = '${laravel}' where empid = ${empid} and tech = 'laravel'`;
                yield connection_1.default.promise().query(query6);
            }
            if (tech[i] === "mysql") {
                let query6 = `update techno2 set level = '${mysql}' where empid = ${empid} and tech = 'mysql'`;
                yield connection_1.default.promise().query(query6);
            }
        }
        language.forEach((e) => __awaiter(void 0, void 0, void 0, function* () {
            if (e === "hindi") {
                if (hread)
                    hread = 1;
                else {
                    hread = 0;
                }
                if (hwrite)
                    hwrite = 1;
                else {
                    hwrite = 0;
                }
                if (hspeak)
                    hspeak = 1;
                else {
                    hspeak = 0;
                }
                let query7 = `update languages2 set speak_ = ${hspeak} , read_ = ${hread} , write_ = ${hwrite} where empid=${empid} and lang = 'hindi' `;
                yield connection_1.default.promise().query(query7);
            }
            if (e === "gujarati") {
                if (gread)
                    gread = 1;
                else {
                    gread = 0;
                }
                if (gwrite)
                    gwrite = 1;
                else {
                    gwrite = 0;
                }
                if (gspeak)
                    gspeak = 1;
                else {
                    gspeak = 0;
                }
                let query7 = `update languages2 set speak_ = ${gspeak} , read_ = ${gread} , write_ = ${gwrite} where empid=${empid} and lang = 'gujarati' `;
                yield connection_1.default.promise().query(query7);
            }
            if (e === "english") {
                if (eread)
                    eread = 1;
                else {
                    eread = 0;
                }
                if (ewrite)
                    ewrite = 1;
                else {
                    ewrite = 0;
                }
                if (espeak)
                    espeak = 1;
                else {
                    espeak = 0;
                }
                let query7 = `update languages2 set speak_ = ${espeak} , read_ = ${eread} , write_ = ${ewrite} where empid=${empid} and lang = 'english' `;
                yield connection_1.default.promise().query(query7);
            }
        }));
    }
    catch (error) {
        console.log(error);
    }
});
exports.saveUpdate = saveUpdate;
