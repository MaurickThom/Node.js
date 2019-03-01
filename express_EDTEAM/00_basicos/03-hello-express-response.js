const express = require('express'),
    app = express()


app
.get('/',(request,response)=>{
    response.send('')
})
.get('/escuela-digital',(request,response)=>{
    response.send(html`
        <h1>Hola Escuel aDigital</h1>
    `)
})
.get('/',(request,response)=>{})
.get('/',(request,response)=>{})