// MIME TYPE : eL TIPO DE INFORMACIÓN
// https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Lista_completa_de_tipos_MIME
/**
 * 
 * 
 */
const express = require('express'),
    app = express()
app.set('view engine','pug')
app.set('views',`${__dirname}/views`)
.get('/encuesta',(request,response)=>{
    response.render('encuesta')
})
.listen(3000,()=>{

})