// MIME TYPE : eL TIPO DE INFORMACIÓN
// https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME
/**
 * 
 * 
 */
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine','pug')
.set('views',`${__dirname}/views`)
.get('/encuesta',(request,response)=>{
    response.render('encuesta')
})
.post('/responder_encuesta',(request,response)=>{
    console.log(request.body); // express es muy minimalista, es decir no trae nada que no necesitas , nisiquiera trae al procesar el body de los request
    response.send('Gracias')
})
.listen(3000,()=>{
})
/**
 * 
 * Los verbos principales
 * 
 *  GET POST PUT PATCH DELETE
 * 
 * REST : 
 * 
 * ES UN SISTEMA DE REGLAS QUE NOS DICTAN CÓMO DISEÑAR APLCACIONES DISTRIBUIDAS DE FORMA QUE TENGAN CIERTAS CARACTERISTICAS DESEABLES
 */