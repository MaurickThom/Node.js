const express = require('express'),
    app = express()

app.use(express.static(`${__dirname}/public`))
app.set('view engine','pug')
// app.set('view engine','hbs')
.listen(3000)