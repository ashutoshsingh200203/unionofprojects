"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
require('./config/connection');
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const auth_1 = __importDefault(require("./routes/auth"));
const jstask_1 = __importDefault(require("./routes/jstask"));
const sqltasks_1 = __importDefault(require("./routes/sqltasks"));
const formcrud_1 = __importDefault(require("./routes/formcrud"));
const ajaxform_1 = __importDefault(require("./routes/ajaxform"));
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/", auth_1.default);
app.use("/jstasks", jstask_1.default);
app.use('/sqltasks', sqltasks_1.default);
app.use('/formcrud', formcrud_1.default);
app.use('/ajax', ajaxform_1.default);
app.set('view engine', 'ejs');
app.listen(5900, () => {
    console.log("Server is running!!!!");
});
