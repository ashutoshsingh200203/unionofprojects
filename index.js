const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conn = require('./src/config/connection');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
require('dotenv').config();

const login = require('./src/routes/auth')
const jstasks = require('./src/routes/jstask')
const sqltasks = require('./src/routes/sqltasks')
const formcrud = require('./src/routes/formcrud')
const ajaxform = require('./src/routes/ajaxform')

app.use(cookieparser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/",login)
app.use("/jstasks",jstasks)
app.use('/sqltasks',sqltasks)
app.use('/formcrud',formcrud)
app.use('/ajax',ajaxform)

app.set('view engine', 'ejs');

app.listen(5900, () => {
    console.log("Server is running!!!!");
})