const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000

app.use(express.json())
.use(express.urlencoded({extended:false}))
.get('/',(request,response)=>{
    response.send('hola')
})
.get('/usuario',(req,res)=>{
    res.json('Get user')
})
.post('/usuario',(req,res)=>{
    res.json('post usuarios')
})
.put('/usuario/:id',(req,res)=>{
    res.json('Put user '+req.params.id)
})
.delete('/usuario',(req,res)=>{
    res.json('Delete')
})
.listen(port,()=>console.log(`Escuchando en el puerto ${port}`))