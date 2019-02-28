const express = require('express'),
    app = express()

app.get('/',(request,response)=>response.end('<h1>sdfsdf</h1>'))
    .get('/users',(request,response)=>{
        response.set({
            'content-type':'text/html;charset=utf-8'
        })
        response.end(`
            <p>
                Sección de usuarios
            </p>
        `)
    })
    .get('/users/:id-:name-:age',(request,response)=>{
        response.end(`
            <h1>Hola ${request.params.name} bienvenido a Express.js</h1>
            <p>Tu id de usuario es <b>${request.params.id}</b></p>
            <p>Tu edad de usuario es <b>${request.params.age}</b></p>

        `)
    })
    .get('/search',(request,response)=>{

    })
.listen(3000,()=>{
    console.log('Puerto 3000');
})