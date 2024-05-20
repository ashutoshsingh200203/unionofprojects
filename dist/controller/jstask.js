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
exports.showCities = exports.showStates = exports.statesCities = exports.showComments = exports.showPosts = exports.ticTactoe = exports.sortingTask = exports.rowColumn = exports.kukuCube = exports.eventTable = void 0;
// const path = require('path')
const path_1 = __importDefault(require("path"));
const connection_1 = __importDefault(require("../config/connection"));
const eventTable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "EventTable", "eventtable.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.eventTable = eventTable;
const kukuCube = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "KukuCube", "updatedkukucube.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.kukuCube = kukuCube;
const rowColumn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "RowColumn", "task1feb(row&column).html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.rowColumn = rowColumn;
const sortingTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "Sorting", "sorting1.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.sortingTask = sortingTask;
const ticTactoe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "TicTacToe", "tictac.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.ticTactoe = ticTactoe;
const showPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "AsyncAwait", "post.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.showPosts = showPosts;
const showComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, "../../public", "AsyncAwait", "personal.html"));
    }
    catch (error) {
        console.log(error);
    }
});
exports.showComments = showComments;
const statesCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile(path_1.default.join(__dirname, '../../public', 'StateCities', 'list.html'));
    }
    catch (error) {
        console.log(error);
    }
});
exports.statesCities = statesCities;
const showStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = `select * from states ;`;
        let result = yield connection_1.default.promise().query(query);
        console.log(result);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
exports.showStates = showStates;
const showCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let cres = yield connection_1.default.promise().query(`select * from cities where state_id = ${req.params.state_id}`);
        console.log(cres);
        res.send(cres);
    }
    catch (error) {
        console.log(error);
    }
});
exports.showCities = showCities;
