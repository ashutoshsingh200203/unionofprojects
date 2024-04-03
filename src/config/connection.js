const sql = require('mysql2');

const conn = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'root',
    database: 'unionoftasks',
  });

  conn.connect((err)=>{
    console.log("Connection Created  !!")
    if(err) console.log(err) ;
  })

  

  module.exports = conn ;