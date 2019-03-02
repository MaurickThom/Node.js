const express = require('express'),
    app = express()

app
    .set('port',(process.env.PORT || 3000))

module.exports = app