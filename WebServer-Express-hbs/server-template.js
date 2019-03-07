const express = require('express'),
    app = express(),
    hbs = require('hbs'),
    port = process.env.PORT || 3000
// los parciales son un bloque de código html que nosostros podemos reutilizar
app.use(express.static(`${__dirname}/public`))
hbs.registerPartials(`${__dirname}/views/parcials`)

// un helpers no es mas que una funcion que se dispara cuando el template lo require

hbs.registerHelper('year',()=>new Date().getFullYear())
app.set('view engine','hbs')
// app.set('view engine','pug')
.get('/',(request,response)=>{
    response.render('home',{
        current:'Home'
    })
})
.get('/about',(request,response)=>{
    response.render('about',{
        current:'About'
    })
})
.listen(port)
