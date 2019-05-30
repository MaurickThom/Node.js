let oracledb = require('oracledb')
let sql = `SELECT * FROM departments`
// `SELECT manager_id, department_id, department_name
//     FROM departments
//     WHERE manager_id = :id`

oracledb.getConnection({
    user:'hr',
    password:'hr',
    connectString:'localhost/xe'
},
(err,connection)=>{
    if(err) return console.log(err.message)
    connection.execute(sql,
//    [103],
    (err,result)=>{
        if(err){
            console.error(err.message)
            doRelease(connection)
            return
        }
        console.log(result.rows)
        doRelease(connection)
    });
});

const doRelease = connection=>{
    connection.close(err=>{
        if(err) return console.log(err.message)
    });
}