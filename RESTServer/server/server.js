const express = require('express'),
    app = express(),
    port = require('./config/config')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
.get('/',(request,response)=>{
    response.send('hola')
})
.get('/usuario',(req,res)=>{
    
    res.json('Get user')
})
.post('/usuario',(req,res)=>{
    let body = req.body
    if(body.nombre ===undefined) {  
        console.log('Entre')
        res.status(400)
        res.json(`NELL perro status ${res.statusCode}`)
        return
    }
    res.json({
        body
    })
})
.put('/usuario/:id',(req,res)=>{
    res.json('Put user '+req.params.id)
})
.delete('/usuario',(req,res)=>{
    res.json('Delete')
})
.listen(port,()=>console.log(`Escuchando en el puerto ${port}`))