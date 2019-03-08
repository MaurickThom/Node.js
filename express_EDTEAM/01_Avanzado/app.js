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

hbs.registerPartials(`${__dirname}/views/parcials`)
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
        src:`${__dirname}/public`, // archivo prinvipal donde estara transpilando
        dest:`${__dirname}/public`,// destino de la transpilacion
        indentedSyntax: false ,// true=.sass , false=.scss
        sourceMap:true,
        outputStyle: 'compressed' 
    }))
    .use(browserify_express({
        entry:`${__dirname}/public`,
        watch:`${__dirname}/public/js/`,
        mount:'/js/script.js',
        verbouse:true,
        minify:true,
        bundle_opst:{debugg:true}
    }))
    .use(express.static(`${__dirname}/public`))
    .use(routes) 
    .use((request,response,next)=>next(createError(404)))
    .use((err,request,response,next)=>{
        response.status(err.status || 500)
        response.render('error',{err})
    })
module.exports = app
