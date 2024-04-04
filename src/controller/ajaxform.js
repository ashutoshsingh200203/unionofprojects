const conn = require("../config/connection");

exports.showStep = async (req,res) =>{
    try {
        let result = [[{}]] , result6 = [[{}]] ,result5 = [[{}]] ,result2 = [[{}]] , result1 = [[{}]] , result3 = [[{}]] , result4 = [[{}]] , hindi = [] , english = [] , gujarati = [] , php = [] , mysql = [] , laravel = []  , oracle = []
    res.render('stepform',{result,result1,result2,result5,result6,result3,hindi,english,gujarati,result4,php,oracle,laravel,mysql});
    } catch (error) {
        console.log(error)
    }
}

exports.stepEmplist = async (req,res)=>{
    try {
        let query = `select * from basic_details2`
        const empdata =  await conn.promise().query(query);
        res.render('emplist copy',{empdata})
    } catch (error) {
      console.log(error)        
    }
}

exports.saveStep = async (req,res)=>{
    try {
        console.log('hello')
        let {tech,php,oracle,mysql,laravel} = req.body ;
        let {language,hread,hwrite,hspeak,gwrite,gspeak,gread,ewrite,espeak,eread} = req.body ;
        let {fname,lname,designation,email,address1,address2,city,state,zipcode,phone,relationship,gender} = req.body ;
        let {refname ,refphone, refrel} = req.body ;
        let {ectc,cctc,notice,location,dept} = req.body ;
        let {compname,desig,todate,fromdate} = req.body ;
        let {education,year,percentage} = req.body ;
       

         let query1 = `insert into basic_details2 (fname,lname,designation,email,phone_number,address_1,address_2,city,state,zipcode,relationship,gender) values (?,?,?,?,?,?,?,?,?,?,?,?)`
         let basic = await conn.promise().query(query1,[fname,lname,designation,email,phone,address1,address2,city,state,zipcode,relationship,gender]) ;
         let insertedId =  basic[0].insertId ;
          
         
         let query = `insert into edu2 (empid,education,year,percentage) values (?,?,?,?)` 
         for(let i = 0 ;i<education.length ; i++)
         {
            if(education[i] && year[i] && percentage[i]) await conn.promise().query(query,[insertedId,education[i],year[i],percentage[i]]);
         }

         let query5 = `insert into experience2 (emp_id,compname,designation, from_,to_) values (?,?,?,?,?)`
         for(let i=0 ; i<compname.length ; i++)
         {
            if(compname[i]&&desig[i]&&todate[i]&&fromdate[i]) await conn.promise().query(query5,[insertedId,compname[i],desig[i],todate[i],fromdate[i]])
         }

         let query4 = `insert into references2 (emp_id,name_,contact,relation) values (?,?,?,?)` 
         for(let i=0 ; i<refname.length ; i++)
         {
            if(refname[i]&&refphone[i]&&refrel[i]) await conn.promise().query(query4,[insertedId,refname[i],refphone[i],refrel[i]]);
         }

         let query3 = `insert into preferences2 (empid,noticeperiod, location,ectc,cctc,department) values (?,?,?,?,?,?)`
         await conn.promise().query(query3,[insertedId,notice,location,ectc,cctc,dept])    

        
        // if(language.length !== 0){

        
     language &&   language.forEach(async e => {
            if(e === "hindi")
            {
                if(hread)hread = 1 
                else{
                    hread = 0
                }
                if(hwrite)hwrite = 1 
                else{
                    hwrite = 0
                }
                if(hspeak)hspeak = 1 
                else{
                    hspeak = 0
                }
                let query7 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"hindi",${hspeak},${hread},${hwrite})`
                await conn.promise().query(query7)
            
            }
            if(e === "gujarati")
            {
                if(gread)gread = 1 
                else{
                    gread = 0
                }
                if(gwrite)gwrite = 1 
                else{
                    gwrite = 0
                }
                if(gspeak)gspeak = 1 
                else{
                    gspeak = 0
                }
                let query8 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"gujarati",${gspeak},${gread},${gwrite})`
                await conn.promise().query(query8)
            
            }
            if(e === "english")
            {
                if(eread)eread = 1 
                else{
                    eread = 0
                }
                if(ewrite)ewrite = 1 
                else{
                    ewrite = 0
                }
                if(espeak)espeak = 1 
                else{
                    espeak = 0
                }
                let query9 = `insert into languages2 (empid,lang,speak_,read_,write_) values (${insertedId},"english",${espeak},${eread},${ewrite})`
                await conn.promise().query(query9)
            
            }
         });

       tech && tech.forEach(async e => {
            if(e === "php")
            {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"php","${php}")`
                await conn.promise().query(techquery1) ;
            }
            if(e === "oracle")
            {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"oracle","${oracle}")`
                await conn.promise().query(techquery1) ;
            }
            if(e === "laravel")
            {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"laravel","${laravel}")`
                await conn.promise().query(techquery1) ;
            }
            if(e === "mysql")
            {
                let techquery1 = `insert into techno2 (empid,tech,level) values (${insertedId},"mysql","${mysql}")`
                await conn.promise().query(techquery1) ;
            }
           });
    } catch (error) {
        console.log(error)
    }
}

exports.updateStep = async (req,res)=>{
    try {
        let requestId = req.query.id ; 
        console.log(req.body) ;
    
        const hindi = [] ,english = [] , gujarati = [] ;
        const php = [] , mysql = [] , oracle = [] , laravel= []
    
        let query = `select * from basic_details2 where emp_id = ${requestId} ;`
        let query1 = `select * from edu2 where empid = ${requestId}`
        let query2 = `select * from experience2 where emp_id = ${requestId}`
        let query5 = `select * from references2 where emp_id = ${requestId}`
        let query6 = `select * from preferences2 where empid = ${requestId}`
        let query3 = `select * from languages2 where empid = ${requestId}`
        let query4 = `select * from techno2 where empid = ${requestId}` ;
    
       let result =  await conn.promise().query(query) ;
       let result1 = await conn.promise().query(query1);
       let result2 = await conn.promise().query(query2);
       let result5 = await conn.promise().query(query5);
       let result6 = await conn.promise().query(query6);
       let result3 = await conn.promise().query(query3);
       let result4 = await conn.promise().query(query4);
    
    
       console.log(result6);
       result3[0].forEach(e =>{
        if(e.lang === "hindi") hindi.push(e) ;
        if(e.lang === "english") english.push(e);
        if(e.lang === "gujarati") gujarati.push(e);
       })
       result4[0].forEach(e =>{
        if(e.tech === "php") php.push(e);
        if(e.tech === "oracle") oracle.push(e);
        if(e.tech === "mysql") mysql.push(e);
        if(e.tech === "laravel") laravel.push(e);
    
       })
        res.render('stepform',{result,result1,result2,result5,result6,result3,hindi,english,gujarati,result4,php,oracle,laravel,mysql});
    } catch (error) {
        console.log(error)
    }
}

exports.saveStepupdate = async (req,res)=>{
    try {
        let empid = req.body.id ;

    
        let {tech,php,oracle,mysql,laravel} = req.body ;
        let {language,hread,hwrite,hspeak,gwrite,gspeak,gread,ewrite,espeak,eread} = req.body ;
        let {fname,lname,designation,email,address1,address2,city,state,zipcode,phone,relationship,gender} = req.body ;
        let {refname ,refphone, refrel,refid} = req.body ;
        let {ectc,cctc,notice,location,dept} = req.body ;
        let {compname,desig,todate,fromdate,workid} = req.body ;
        let {education,year,percentage,eduid} = req.body ;
        console.log(req.body)
    
        let query1 = `update basic_details2 set fname = '${fname}',lname = '${lname}' , designation = '${designation}' , email = '${email}' , address_1 = '${address1}' ,
        address_2 = '${address2}' , city = '${city}' , state = '${state}' , zipcode = '${zipcode}' , phone_number = '${phone}' , relationship = '${relationship}' , gender = '${gender}' where emp_id = ${empid} `
        let basicdetails = await conn.promise().query(query1) ;
        console.log(query1)
    
        let query2 = `update preferences set location = '${location}' , noticeperiod = '${notice}' , ectc = ${ectc} , cctc= ${cctc} , department= '${dept}' where emp_id = ${empid}`
        let preferences = await conn.promise().query(query2)
        console.log(query2) ;
    
        for(let i=0 ; i<education.length ; i++)
        {
            if(education[i] != "" && year[i] != "" && percentage[i] != "")
            {
                let query3 = `update edu2 set education = '${education[i]}' , year = ${year[i]} , percentage = ${percentage[i]} where empid = ${empid} and id =${eduid[i]}`
                await conn.promise().query(query3)
                console.log(query3)
    
            }
        }
    
        for(let i =0 ; i<refname.length ; i++)
        {
            if(refname[i] != "" && refphone[i] != "" && refrel[i] != "")
            {
                let query4 = `update references2 set name_ ='${refname[i]}' , contact='${refphone[i]}' , relation = '${refrel[i]}' where emp_id = ${empid} and id= ${refid[i]}`
                await conn.promise().query(query4) ;
                console.log(query4) ;
            }
        }
    
        for(let i=0 ; i<compname.length ; i++)
        {
            if(compname[i] != "" && desig[i] != "" && todate != "" && fromdate != "")
            {
                let query5 = `update experience2 set compname = '${compname[i]}', desig = '${desig[i]}' , todate = '${todate[i]}' , fromdate = '${fromdate}' where emp_id = ${empid} and id=${workid[i]}`
                console.log(query5)
            }
        }
    
        for(let i=0 ; i<tech.length ; i++)
        {
            if(tech[i]=== "php")
            {
                let query6 = `update techno2 set level = '${php}' where empid = ${empid} and tech = 'php'`
                await conn.promise().query(query6);
            }
            if(tech[i]=== "oracle")
            {
                let query6 = `update techno2 set level = '${oracle}' where empid = ${empid} and tech = 'oracle'`
                await conn.promise().query(query6);
            }
            if(tech[i]=== "laravel")
            {
                let query6 = `update techno2 set level = '${laravel}' where empid = ${empid} and tech = 'laravel'`
                await conn.promise().query(query6);
            }
            if(tech[i]=== "mysql")
            {
                let query6 = `update techno2 set level = '${mysql}' where empid = ${empid} and tech = 'mysql'`
                await conn.promise().query(query6);
            }
        }
    

        language.forEach(async e => {
            if(e === "hindi")
            {
                if(hread)hread = 1 
                else{
                    hread = 0
                }
                if(hwrite)hwrite = 1 
                else{
                    hwrite = 0
                }
                if(hspeak)hspeak = 1 
                else{
                    hspeak = 0
                }
                let query7 = `update languages2 set speak_ = ${hspeak} , read_ = ${hread} , write_ = ${hwrite} where empid=${empid} and lang = 'hindi' `
                await conn.promise().query(query7);
            
            }
            if(e === "gujarati")
            {
                if(gread)gread = 1 
                else{
                    gread = 0
                }
                if(gwrite)gwrite = 1 
                else{
                    gwrite = 0
                }
                if(gspeak)gspeak = 1 
                else{
                    gspeak = 0
                }
                let query7 = `update languages2 set speak_ = ${gspeak} , read_ = ${gread} , write_ = ${gwrite} where empid=${empid} and lang = 'gujarati' `
                await conn.promise().query(query7);
            
            }
            if(e === "english")
            {
                if(eread)eread = 1 
                else{
                    eread = 0
                }
                if(ewrite)ewrite = 1 
                else{
                    ewrite = 0
                }
                if(espeak)espeak = 1 
                else{
                    espeak = 0
                }
                let query7 = `update languages2 set speak_ = ${espeak} , read_ = ${eread} , write_ = ${ewrite} where empid=${empid} and lang = 'english' `
                await conn.promise().query(query7);
            
            }
         });
    
    } catch (error) {
        console.log(error)
    }
}