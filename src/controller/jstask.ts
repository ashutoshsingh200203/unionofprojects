// const path = require('path')
import path from 'path'
import conn from '../config/connection'
import {Request,Response} from 'express'

export const eventTable = async (req : Request,res : Response) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","EventTable","eventtable.html"))
    } catch (error) {
        console.log(error)
    }
}

export const kukuCube = async (req: Request,res : Response) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","KukuCube","updatedkukucube.html"))
    } catch (error) {
        console.log(error)
    }
}

export const rowColumn = async (req: Request,res : Response) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","RowColumn","task1feb(row&column).html"))
    } catch (error) {
        console.log(error)
    }
}

export const sortingTask = async (req: Request,res : Response) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","Sorting","sorting1.html"))
    } catch (error) {
        console.log(error)
    }
}

export const ticTactoe = async (req: Request,res : Response) =>{
    try {
        res.sendFile(path.join(__dirname,"../../public","TicTacToe","tictac.html"))
    } catch (error) {
        console.log(error)
    }
}

export const showPosts = async (req: Request,res : Response) => {
    try {
        res.sendFile(path.join(__dirname,"../../public","AsyncAwait","post.html"))
    } catch (error) {
        console.log(error)
    }
}

export const showComments = async (req: Request,res : Response)=>{
    try {
        res.sendFile(path.join(__dirname,"../../public","AsyncAwait","personal.html"))
    } catch (error) {
        console.log(error)
    }
}

export const statesCities = async (req: Request,res : Response)=>{
    try {
        res.sendFile(path.join(__dirname,'../../public','StateCities','list.html'))
    } catch (error) {
        console.log(error)
    }
}

export const showStates = async (req: Request,res : Response)=>{
    try {
        let query = `select * from states ;`
        let result =  await conn.promise().query(query) ;
        console.log(result)
        res.send(result) ;
    } catch (error) {
        console.log(error)
    }
}

export const showCities = async (req: Request,res : Response)=>{
    try {
        let cres = await conn.promise().query(`select * from cities where state_id = ${req.params.state_id}`);
        console.log(cres)
        res.send(cres);
    } catch (error) {
        console.log(error)
    }
}