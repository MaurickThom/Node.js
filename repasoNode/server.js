const express = require('express')
const app = express()
// Middleware que nos permitira filtrar cualquier tipo de peticion
// instruccion o callback que se ejecutara siempre no importa de lo que el usuario pida

app.use(express.static(`${__dirname}/public`))

app.get('/service',(req,res)=>{
    let salida = {
        name:'Thom',
        url:req.url
    }
    // res.json(salida)
    // res.send('Segunda prueba express')
    res.send(JSON.stringify(salida))
})
.get('/data',(req,res)=>{
    res.send('Otra cosa')
})
.listen(8000,()=>console.log('Escuchando en el puerto 8000'))
