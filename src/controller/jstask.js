const path = require('path')

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