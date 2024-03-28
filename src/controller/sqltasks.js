const conn = require('../config/connection');

exports.studentData = async (req,res)=>{
    try {
            let l = req.query.page || 1;
            if(l>500)
            {
                l=500 ;
            }
            let sort = req.query.sort || "asc" ;
            let column = req.query.column || "id" ;
            let offset = (Number(l)-1)*100 ;
            
            const query = `select * ,DATE_FORMAT(createdAt, "%d/%m/%Y %T") as createdAt  from student_master_2 order by ${column} ${sort} limit 100 offset ${offset}`
            // console.log(query);
            conn.query(query,(err,result)=>{
                if(err)
                console.log(err);
                else
                {
                 let datas = result ;
                res.render('grid',{datas,l,sort});}
                
            })
    
    } catch (error) {
        console.log(error)
    }
}