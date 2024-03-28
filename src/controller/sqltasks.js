const conn = require('../config/connection');

exports.studentData = async (req, res) => {
    try {
        let l = req.query.page || 1;
        if (l > 500) {
            l = 500;
        }
        let sort = req.query.sort || "asc";
        let column = req.query.column || "id";
        let offset = (Number(l) - 1) * 100;

        const query = `select * ,DATE_FORMAT(createdAt, "%d/%m/%Y %T") as createdAt  from student_master_2 order by ${column} ${sort} limit 100 offset ${offset}`
        // console.log(query);
        conn.query(query, (err, result) => {
            if (err)
                console.log(err);
            else {
                let datas = result;
                res.render('grid', { datas, l, sort });
            }

        })

    } catch (error) {
        console.log(error)
    }
}

exports.attendanceGrid = async (req, res) => {
    try {
        let l = req.query.page || 1;
        if (l > 4) {
            l = 4;
        }
        let mon = req.query.month || "december2023";
        let newmon = mon.slice(0, -4);
        // let saal = req.query.year ;
        let offset = (Number(l) - 1) * 50;

        let sql = `select sm.id , sm.fname , monthname(att.dop) as month_ , count(att.stud_status) as present from student_master as sm inner join attendance as att on sm.id = att.id where att.stud_status ='p'  group by id,month_ having month_ = "${newmon}" order by sm.id limit 50 offset ${offset} ; `

        conn.query(sql, (err, result) => {
            if (err)
                console.log(err);
            else
                res.render('atendancedata', { result, l, mon })
        })
    } catch (error) {
        console.log(error)
    }
}

exports.examData = async (req, res) => {
    try {
        let l = req.query.page || 1;
        if (l > 7) {
            l = 7;
        }

        let offset = (Number(l) - 1) * 90;

        let sql = `select sm.id , sm.fname , sm.lname , eid	, sum(result.pmarks) as prmarks , sum(result.tmarks) as thmarks
        from result inner join student_master as sm on result.studid = sm.id group by studid , eid limit 90 offset ${offset}`;


        conn.query(sql, (err, result) => {
            if (err)
                console.log(err);
            else
                res.render('examdata', { l, result })
        })
    } catch (error) {
        console.log(error)
    }
}

exports.fullProfile = async (req, res) => {
    try {

        let studid = req.query.id;

        let sql = `select sub.subid , sub.sub_name , eid , pmarks ,sm.fname , sm.lname, sm.id ,tmarks from result inner join subjectmaster as sub on sub.subid = result.subid  inner join student_master as sm on sm.id = result.studid  where studid = ${studid}`

        conn.query(sql, (err, result) => {
            let sql2 = `select count(stud_status) as present,monthname(dop) as month  from attendance where id = 1 and stud_status='p' group by id,month`
            // select count(stud_status) as present,monthname(dop) as month  from attendance where id = 1 and stud_status="p" group by id,month ;

            conn.query(sql2, (err, result2) => {
                if (err)
                    console.log(err);
                else {
                    res.render('fullprofile', { result, result2 });
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}