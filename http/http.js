const express = require('express')
const session = require('express-session')
const app = express()

app.get('/',(req,res) => {
    res.send('Mi primer servidor 1')
})

app.listen(3000,()=>{
    console.log('Escuchando desde el puerto 3000');
})