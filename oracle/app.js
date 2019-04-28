let oracledb = require('oracledb')
oracledb.getConnection({
    user:'hr',
    password:'hr',
    connectString:'localhost/xe'
},
(err,connection)=>{
    if(err) return console.log(err.message)
    connection.execute('SELECT * FROM employees',
    [],
    (err,result)=>{
        if(err){
            console.err(err.message)
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