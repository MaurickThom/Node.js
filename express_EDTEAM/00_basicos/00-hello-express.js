const express = require('express')

const app = express()

app.get('/',(request,response)=>{
    response.end('<h1>HOLA MUNDO DESDE EXPRESS</h1>')
})
.listen(3000,()=>{
    console.log('Iniciando Express.js en el puerto 3000');
})