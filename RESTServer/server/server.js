const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000

app.get('/',(request,response)=>{
    response.send('hola')
})
.get('/usuario',(req,res)=>{
    res.json('Get user')
})
.post('/usuario',(req,res)=>{
    res.json('post usuarios')
})
.put('/usuario',(req,res)=>{
    res.json('Put user')
})
.listen(port,()=>console.log(`Escuchando en el puerto ${port}`))