const expressSession = require('express-session'),
    express=require('express'),
    app = express()

app.listen(3000,_=>{
    console.log('Escuchando en el puerto 3000');
})