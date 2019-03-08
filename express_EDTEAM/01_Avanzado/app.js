const express = require('express'),
    createError = require('http-errors'),
    logger = require('morgan'),
    favicon=require('serve-favicon'),
    cookieParser  = require('cookie-parse'),
    session=require('express-session'),
    sassMiddleware = require('node-sass-middleware'),
    browserify_express = require('babelify-express'),
    hbs  = require('hbs'),
    hbsHelpers = require('./views/helpers'),
    routes = require('./routes/index'),
    app = express()

app
    .set('port', (process.env.PORT || 3000))
    .set('views',`${__dirname}/views`)
    .set('view_engine','hbs')
    .use(favicon(`${__dirname}/public/img/favicon.io`))
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({extended:false}))
    .use(cookieParser())
    .use(session({
        secret:'ESTO ES SECRETO',
        resave:true,
        saveUninitialized:true
    }))
    .use(sassMiddleware({
        src:''
    }))
module.exports = app