const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
    secret:'ESTO ES SECRETO',
    resave : true

}))
app.get('/',(req,res) => {
    res.send('Mi primer servidor 1')
})

app.listen(3000,()=>{
    console.log('Escuchando desde el puerto 3000');
})