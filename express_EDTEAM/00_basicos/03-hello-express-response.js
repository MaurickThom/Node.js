const express = require('express'),
    app = express()


app
.get('/',(request,response)=>{
    response.send('adasdasd')
})
.get('/escuela-digital',(request,response)=>{
    // response.send(html`
    //     <h1>Hola Escuel aDigital</h1>
    // `)
    response.redirect(301,"https://ed.team")
})
.get('/json',(request,response)=>{
    response.json({
        name:'Thom',
        age:20
    })
})
.get('/render',(request,response)=>{
    // response.render(`${__dirname}/index.html`) permite solo trabajar con algun sistema template
})
.get('/',(request,response)=>{})
.listen(3000)