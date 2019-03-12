const express = require('express'),
    session = require('express-session'),
    MongoStorage =require('connect-mongo')(session),
    MONGO_URL = 'mongodb://localhost:27017/auth',
    app = express(),
    mongoose = require('mongoose') // permite modelar la informacion de cada usuario , como  correo , contraseña , perfil

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error',err=>{
    throw err
    process.exit(1)
})

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