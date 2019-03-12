const express = require('express'),
    session = require('express-session'),
    MongoStorage =require('connect-mongo')(session),
    MONGO_URL = 'mongodb://localhost:27017/auth',
    app = express()

app
    .use(session({
        secret:'ESTO ES SECRETO',
        resave :true,
        saveUninitialized:true,
        store:new MongoStorage({
            url:MONGO_URL,
            autoReconnect:true
        })
    }))
    .get('/',(request,response)=>{
        request.session.cuenta = request.session.cuenta ?
            request.session.cuenta+1:
            1
        response.send(`Visitas ${request.session.cuenta}`)
    })
    .listen(3000)