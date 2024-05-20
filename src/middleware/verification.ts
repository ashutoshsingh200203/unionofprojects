import { NextFunction,Request,Response } from "express";

import conn from '../config/connection'
export const isVerified = async (req : Request,res: Response,next : NextFunction) =>{
    const {token} = req.cookies ; 
    if(!token) return  res.send("Not");
    next()
}