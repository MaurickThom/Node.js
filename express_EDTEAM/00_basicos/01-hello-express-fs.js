// http://expressjs.com/en/4x/api.html
const express = require('express'),
    app = express()

app.get('/',(request,response)=>{
    response.sendFile(`${__dirname}/index.html`)// la variable __dirname nos representa el directorio de donde se esta ejecutando el archivo que esta levantando nodejs
})
.listen(3000,()=>{
    console.log('Iniciando Express.js en el puerto 3000');
}) 