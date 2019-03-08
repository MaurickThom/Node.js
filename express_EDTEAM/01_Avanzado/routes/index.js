const express = require('express'),
    router = express.Router()
router
    .get('/',(request,response,next)=>response.render('index',{title:'Home'}))
    .get('/portfolio',(request,response,next)=>response.render('portfolio',{title:'Portafolio'}))
    .get('/contact',(request,response,next)=>response.render('contact',{title:'Contacto'}))
module.exports = router 