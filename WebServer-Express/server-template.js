const express = require('express'),
    app = express(),
    hbs = require('hbs')
// los parciales son un bloque de código html que nosostros podemos reutilizar
app.use(express.static(`${__dirname}/public`))
app.set('view engine','hbs')
// app.set('view engine','pug')
.get('/',(request,response)=>{
    response.render('home',{
        year:new Date().getFullYear()
    })
})
.listen(3000)