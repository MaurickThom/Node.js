const express = require('express'),
    app = express()

app.get('/',(request,response)=>response.end('<h1></h1>'))
    .get('/users/:id-:name-:age',(request,response)=>{
        response.end(`
            <h1>Hola ${request.params.name} bienvenido a Express.js</h1>
        `)
    })
    .get('',(request,response)=>{

    })

