const express = require('express'),
    app = express(),
    hbs = require('hbs')
// los parciales son un bloque de código html que nosostros podemos reutilizar
app.use(express.static(`${__dirname}/public`))
hbs.registerPartials(`${__dirname}/views/parcials`)
app.set('view engine','hbs')
// app.set('view engine','pug')
.get('/',(request,response)=>{
    response.render('home',{
        year:new Date().getFullYear(),
        current:'Home'
    })
})
.get('/about',(request,response)=>{
    response.render('about')
})
.listen(3000)