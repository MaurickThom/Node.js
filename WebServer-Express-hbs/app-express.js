const express = require('express')

const app = express()

app.get('/',(request,response)=>{ // Ese / significa que toda las peticiones que entren por esa barra ejecutaran el callbock
    // response.send('Hola mundo!!')
    let salida = {
        nombre:'Thom',
        edad:20,
        url :request.url
    }
    response.send(salida)

})
.get('/data',(request,response)=>{
    response.send('Hola data')
})
.listen(8080,()=>{
    console.log('Escuchando peticiones en el puerto 8080');
})