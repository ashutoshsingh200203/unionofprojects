const conn = require("../config/connection");

exports.isVerified = async (req,res,next) =>{
    const {token} = req.cookies ; 
    if(!token) return  res.send("Not");
    next()
}