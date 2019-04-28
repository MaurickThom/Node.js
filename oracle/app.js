let oracledb = require('oracledb')
oracledb.getConnection({
    user:'HR',
    password:'HR'
}),
(err,connection)=>{
    if(err) return console.log(err.message)
    connection.execute('SELECT * FROM employees'),
    [101],
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
    }
}