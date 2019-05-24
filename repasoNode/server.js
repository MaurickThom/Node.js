const express = require('express')
const app = express()

app.get('/',(req,res)=>{
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