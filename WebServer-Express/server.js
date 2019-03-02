const express = require('express'),
    app = express()

// app.use(express.static(`${__dirname}/public`))
app.get('/',(request,response)=>{
    response.sendfile(`${__dirname}/public/index.html`)
})
.listen(3000)