import express from 'express';
const app = express();
import bodyParser from 'body-parser';
require('./config/connection');
import md5  from 'md5' ;
import cookieparser from 'cookie-parser'
require('dotenv').config();


import login from './routes/auth'
import jstasks from './routes/jstask'
import sqltasks from './routes/sqltasks'
import formcrud from './routes/formcrud'
import ajaxform from './routes/ajaxform'

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