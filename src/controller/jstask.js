const path = require('path')
const conn = require('../config/connection')

exports.eventTable = async (req,res) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","EventTable","eventtable.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.kukuCube = async (req,res) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","Kuku_Cube","updatedkukucube.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.rowColumn = async (req,res) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","Row_Column","task1feb(row&column).html"))
    } catch (error) {
        console.log(error)
    }
}

exports.sortingTask = async (req,res) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","Sorting","sorting1.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.ticTactoe = async (req,res) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","tictactoe","tictac.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.showPosts = async (req,res) => {
    try {
        res.sendFile(path.join(__dirname,"../../public","Async_Await","post.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.showComments = async (req,res)=>{
    try {
        res.sendFile(path.join(__dirname,"../../public","Async_Await","personal.html"))
    } catch (error) {
        console.log(error)
    }
}

exports.statesCities = async (req,res)=>{
    try {
        res.sendFile(path.join(__dirname,'../../public','State_Cities','list.html'))
    } catch (error) {
        console.log(error)
    }
}

exports.showStates = async (req,res)=>{
    try {
        let query = `select * from states ;`
        let result =  await conn.promise().query(query) ;
        console.log(result)
        res.send(result) ;
    } catch (error) {
        console.log(error)
    }
}

exports.showCities = async (req,res)=>{
    try {
        let cres = await conn.promise().query(`select * from cities where state_id = ${req.params.state_id}`);
        console.log(cres)
        res.send(cres);
    } catch (error) {
        console.log(error)
    }
}