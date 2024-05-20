import {Request,Response} from 'express' ;
import conn from '../config/connection'
import md5 from 'md5';
// const md5 = require('md5');
import jwt from 'jsonwebtoken'
// const jwt = require('jsonwebtoken');
// import {isVerified} from '../middleware/verification'
const { isVerified } = require("../middleware/verification");

interface Insert {
    insertId : number
}
interface Len {
    length : number
}

export const showRegister = async (req : Request, res : Response) => {
    try {
        console.log(req.cookies)
        if (req.cookies.token) res.render('home')
        res.render('register');
    } catch (error) {
        console.log(error);
    }
}

export const saveRegister = async (req : Request, res : Response) => {
    try {
        console.log(req.body)
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

        let query = `insert into users (fname,lname,email,salt,accesskey) values (?,?,?,?,?)`
        let result = await conn.promise().query(query, [fname, lname, email, salt, accesskey])
        let insertedId = (result[0] as Insert).insertId;

        res.status(200).json({ insertedId, accesskey, salt })
    } catch (error) {
        console.log(error)
    }
}

export const createPassword = async (req : Request, res : Response) => {

    try {
        let insertedId = req.query.id;
        let accesskey = req.query.accesskey;
        let salt = req.query.salt;
        var isvalid = true;


        let data = await conn.promise().query(`select * from users where uid = '${insertedId}'`)
        console.log(data)
        var expiry = new Date().valueOf() - data[0][0].created_at.valueOf();
        let hours = Math.floor(expiry / (1000 * 60 * 60));

        if (accesskey !== data[0][0].accesskey) isvalid = false;
        console.log(isvalid)

        res.render('password', { hours, accesskey, salt, insertedId, isvalid })

    } catch (error) {
        console.log(error)
    }
}

export const savePassword = async (req : Request, res : Response) => {
    try {

        let { pass, cpass, salt, id } = req.body;
        let encrypted = md5(`${cpass}${salt}`)
        console.log(`${cpass}${salt}`)

        let query = `update users set pass = '${encrypted}', created_at = now() where uid=${id}`
        let result = await conn.promise().query(query);

        res.json({ msg: "Congratulations Account Created Successfully" })
    } catch (error) {
        console.log(error)
    }
}

export const showLogin = async (req : Request, res : Response) => {
    try {
        res.render('login')
    } catch (error) {
        console.log(error)
    }
}

export const saveLogin = async (req : Request, res : Response) => {
    try {
        let { loginmail, loginpass } = req.body;
        let query = `select * from users where email = '${loginmail}'`
        let result = await conn.promise().query(query);
        // console.log(result) ;

        if ((result[0] as Len).length === 0) res.json({ msg: 'Invalid username or password' })

        let decrypt = md5(`${loginpass}${result[0][0].salt}`)
        console.log(`${loginpass}${result[0][0].salt}`)
        // console.log(result[0][0].salt)
        // console.log(decrypt)

        const uid = result[0][0].uid;
        if (decrypt === result[0][0].pass) {
            const token = jwt.sign({ uid }, process.env.SECRET_KEY, { expiresIn: '1h' })
            res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true })
            console.log('mwesage')
            res.json({ msg: 'Login successfully', token: token })

        }
        else {
            res.json({ msg: "Invalid username or password" })
        }

    } catch (error) {
        console.log(error)
    }
}

export const showForgot = async (req : Request, res : Response) => {
    try {
        res.render('forgot')
    } catch (error) {
        console.log(error)
    }
}

export const saveForgot = async (req : Request, res : Response) => {
    try {
        let {emailId} = req.body ;
        let query = `select * from users where email = '${emailId}'`
        let result = await conn.promise().query(query);
        console.log(result);
        if ((result[0] as Len).length !== 0) {
            res.json({ msg: `http://localhost:5900/pass/?id=${result[0][0].uid}&accesskey=${result[0][0].accesskey}&salt=${result[0][0].salt}` })
        }
    } catch (error) {
        console.log(error)
    }
}

export const doGenerate = async (req : Request, res : Response) => {
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

        let query = `select * from users where accesskey = '${accesskey}'`
        let query1 = `update users set accesskey = '${accesskey2}' , created_at = now() where accesskey = '${accesskey}'`

        let result = await conn.promise().query(query1);

        res.send(`<div>Click this <a href='http://localhost:5900/pass?id=${id}&accesskey=${accesskey2}&salt=${salt}'>http://localhost:5900/pass?id=${id}&accesskey=${accesskey2}&salt=${salt}</a> for the verification </div>`)

    } catch (error) {
        console.log(error)
    }
}

export const doLogout = async (req : Request, res : Response) => {
    try {
        res.clearCookie('token');
        res.redirect('login');
    } catch (error) {
        console.log(error)
    }
}

export const goHome = async (req  : Request, res : Response) => {
    try {
        res.render('home')
    } catch (error) {
        console.log(error)
    }
}