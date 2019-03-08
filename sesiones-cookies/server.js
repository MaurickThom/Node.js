const expressSession = require('express-session'),
    express=require('express'),
    app = express()

app.use(expressSession({
    secret:'ESTO ES SECRETO' ,// esta propiedad es tomada por un algoritmo de criptografia que agarra este string y lo utiliza para encriptar el id del cliente
    resave:true, // fuerza que por cada llamada que haga al servidor la informacion de la session se guarde en la base de datos, aun asi no se hallan hecho cambios
    saveUninitialized:true //  guarda en la base de datos un objeto vacio
}))
app.get('/',(request,response)=>{
    request.session.cuenta = request.session.cuenta ? request.session.cuenta+1:1;
    response.send(`Has visto esta página ${request.session.cuenta}`)
})
.listen(3000,_=>{
    console.log('Escuchando en el puerto 3000');
})
