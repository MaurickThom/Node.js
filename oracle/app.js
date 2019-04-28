let oracledb = require('oracledb')
oracledb.getConnection({
    user:'HR',
    password:'HR',
    port:'1521',
    connectString:'localhost/xe'
},
(err,connection)=>{
    if(err) return console.log(err.message)
    connection.execute('SELECT * FROM employees',
    [],
    {
        maxRows:1
    },
    (err,result)=>{
        if(err){
            console.err(err.message)
            doRelease(connection)
            return
        }
        console.log(result.now)
        doRelease(connection)
    });
});

const doRelease = connection=>{
    connection.close(err=>{
        if(err) return console.log(err.message)
    });
}