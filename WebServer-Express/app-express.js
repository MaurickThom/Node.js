const express = require('express')

const app = express()

app.get('/',(request,response)=>{ // Ese / significa que toda las peticiones que netren por esa barra ejecutaran el callbock
    response.send('Hola mundo')
})
app.listen(8080)