const express = require('express'),
    app = express()

app.use(express.static(`${__dirname}/public`))
app.set('view engine','hbs')
// app.set('view engine','hbs')
.get('/',(request,response)=>{
    response.render('home',{
        year:new Date().getFullYear()
    })
})
.listen(3000)