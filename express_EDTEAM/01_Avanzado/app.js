const express = require('express'),
    createError = require('http-errors'),
    logger = require('morgan'),
    favicon=require('serve-favicon'),
    cookieParser  = require('cookie-parse'),
    session=require('express-session'),
    sassMiddleware = require('node-sass-middleware'),
    browserify_express = require('babelify-express'),
    app = express()

app
    .set('port', (process.env.PORT || 3000))

module.exports = app