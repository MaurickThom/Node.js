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
 * 
 * Tu servicio manipula RECURSOS
 * 
 * Los recursos son entregados a los clientes, y estos pueden decirle al servidor que quieren MODIFICARLOS, BORRARLOS ,REEMPLAZARLOS O AGREGAR NUEVOS RECURSOS
 * 
 * ¿CÓMO IDENTIFICAR UN RECURSO?
 * URL : lOCALIZACIÓN DE UN RECURSO EN UNA RED DE COMPUTADORAS
 * URI : SECUENCIA DE CARACTERES PARA IDENTIFICAR UN RECURSO
 * 
 * 
 * El verbo GET 
 * 
 * IDEMPOTENTE : NO IMPORTA CUANDO PEDIDOS DE ESTE VERBO SE HAGA NO PRODUCIRAN NINGUN CAMBIO EN EL SERVIDOR
 * 
 *      MISMA OPERACIÓN SIEMPRE OCURRE EN EL SERVIDOR
 *      NO HAY EFECTOS SECUNDARIOS EN EL SERVIDOR.ES UNA OPERACION READ-ONLY
 *      EL CUERSO DEL REQUEST NO LLEVA DATA
 * 
 * El verbo POST
 * 
 *      Comúnmente utilizado para CREAR recursos
 *      No es IDEMPOTENTE
 *      Produce efectos secundarios en el servidor
*      El cuerpo del REQUEST si lleva data
 */