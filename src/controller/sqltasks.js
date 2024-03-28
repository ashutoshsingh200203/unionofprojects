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

exports.dynamicQuery = async (req, res) => {
    try {
        let result = [];

        if (req.query.sqlinput) {
            let l = req.query.page || 1;
            let offset = (Number(l) - 1) * 10;
            let sql2 = req.query.sqlinput;
            let sql = sql2 + ` limit 20 offset ${offset}`;
            conn.query(sql2, (err, result2) => {
                if (err) { console.log(err); }
                else {
                    let pages = Math.ceil((result2.length) / 10);
                    console.log(result2.length);
                    console.log(pages);
                    conn.query(sql, (err, result) => {
                        if (err) console.log(err);
                        else {
                            res.render('final', { result, l, sql2, pages });
                        }

                    })


                }
            })
        }
        else {
            res.render('final', { result });
        }
    } catch (error) {
        console.log(error)
    }
}

exports.orderbyUi = async (req, res) => {
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
        if (sort == "asc") {
            sort = "desc"
        }
        else {
            sort = "asc";
        }
        console.log(sort);
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

exports.advancedSearch = async (req, res) => {
    try {
        let l = req.query.page || 1;
        let searchby = req.query.searchby;
        let fname = req.query.fname;
        let lname = req.query.lname;
        let phone = Number(req.query.phone);
        let city = req.query.city;
        let operator = req.query.operator;

        if (l > 500) {
            l = 500;
        }
        // console.log(typeof(phone))
        let offset = (Number(l) - 1) * 100;
        let query = `select * ,DATE_FORMAT(createdAt, "%d/%m/%Y %T") as createdAt  from student_master limit 100 offset ${offset}`;

        if (!searchby) {
            let conditions = [];

            if (fname) conditions.push(`fname like  '${fname}%'`)
            if (lname) conditions.push(`lname like  '${lname}%'`)
            if (phone) conditions.push(`phone like  '${phone}%'`)
            if (city) conditions.push(`city like  '${city}'%`)

            let whereclause = "";
            if (conditions.length > 0) {
                whereclause = "WHERE " + conditions.join(` ${operator} `);
            }


            query = `select * ,DATE_FORMAT(createdAt, "%d/%m/%Y %T") as createdAt  from student_master_2 ${whereclause} limit 100  offset ${offset}`
            // console.log(query);
        }
        if (searchby) { query = `select * ,DATE_FORMAT(createdAt, "%d/%m/%Y %T") as createdAt  from student_master_2 where id = ${searchby} limit 100 offset ${offset}` }

        conn.query(query, (err1, result) => {
            if (err1)
                console.log(err1);
            else {
                let datas = result;
                res.render('advancedsearch', { datas, l, fname, lname, phone, city, operator });
            }

        })
    } catch (error) {
        console.log(error)
    }
}

exports.delimeterSearch = async (req, res) => {
    try {
        let delimeter2 = req.query.delimeter;
        let delimeter = req.query.delimeter + "$";
        // console.log(delimeter);
        // var arr = delimeter.split(/[_^${}]/)
        // console.log(arr);
        let fname = [];
        let lname = [];
        let state = [];
        let dep = [];
        let age = [];
        let phone = [];
        let arr = [];
        let sql = [];
        for (let i = 0; i < delimeter.length; i++) {
            for (let j = i + 1; j < delimeter.length; j++) {
                if (delimeter.charAt(j) == "_" || delimeter.charAt(j) == "$" || delimeter.charAt(j) == "^" || delimeter.charAt(j) == "}" || delimeter.charAt(j) == "{" || delimeter.charAt(j) == ":") {
                    let str = delimeter.slice(i, j);
                    arr.push(str);
                    i = j;
                }
            }
        }
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].charAt(0) == "_") {
                fname.push(`fname like '%${arr[i].slice(1)}%'`);
            }
            if (arr[i].charAt(0) == "^") {
                lname.push(`lname like '%${arr[i].slice(1)}%'`);
            }
            if (arr[i].charAt(0) == "$") {
                dep.push(`department like '%${arr[i].slice(1)}%'`);
            }
            if (arr[i].charAt(0) == "}") {
                age.push(`age like '%${arr[i].slice(1)}%'`);
            }
            if (arr[i].charAt(0) == "{") {
                phone.push(`phone like '%${arr[i].slice(1)}%'`);
            }
            if (arr[i].charAt(0) == ":") {
                state.push(`state like '%${arr[i].slice(1)}%'`);
            }
        }
        //    console.log(fname);

        if (fname.length > 0) {
            let name = fname.join(" OR ");
            sql.push(name)
        }
        if (lname.length > 0) {
            let name = lname.join(" OR ")
            sql.push(name)
        }
        if (dep.length > 0) {
            let name = dep.join(" OR ")
            sql.push(name)
        }
        if (age.length > 0) {
            let name = age.join(" OR ")
            sql.push(name)
        }
        if (phone.length > 0) {
            let name = phone.join(" OR ")
            sql.push(name)
        }
        if (state.length > 0) {
            let name = state.join(" OR ")
            sql.push(name)
        }
        let sql2 = "";
        if (sql.length > 0) {
            sql2 = "where " + sql.join(" AND ")
        }

        let sql3 = `select * from student_master ${sql2}`

        conn.query(sql3, (err, result) => {
            if (err) console.log(err);
            else {
                res.render('delimeterinput', { result, delimeter2 });
                // console.log(result);
            }
        })
    } catch (error) {
        console.log(error)
    }
}