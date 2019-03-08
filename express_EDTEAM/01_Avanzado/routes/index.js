const express = require('express'),
    router = express.Router()
router
    .get('/',(request,response,next)=>response.render('index',{title:'Home'}))
    .get('/',(request,response,next)=>response.render('portfolio',{title:'Portafolio'}))
module.exports = router 