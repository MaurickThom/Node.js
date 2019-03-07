const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000
app.use(express.static(`${__dirname}/public`))

app.set('view engine','pug')
.get('/',(request,response)=>{
    response.render('home')
})
.listen(port)