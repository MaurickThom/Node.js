const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Segunda prueba express')
})
.listen(8000,()=>console.log('Escuchando en el puerto 8000'))
