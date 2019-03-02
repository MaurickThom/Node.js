const express = require('express'),
    app = express()

app.get('/',(request,response)=>{
    response.sendfile(`${__dirname}/public/index.html`)
})
.listen(3000)