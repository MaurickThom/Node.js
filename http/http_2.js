const express = require('express')

const app = express()

app.get('/',(req,resp) => {
    resp.send(`${req.query.nombre || 'anonimo'}`)
    // http://localhost:3000/?nombre=thom
})

app.listen(3000,()=>{
    console.log('Puerto 3000')
})

// Verbos GET POST DELETE PUT :Define el tipo de request de pedido que se hara al servidor
/**
 * GET : obtener la ruta / y luego define la version del protocolo a usar (GET / HTTP/1.1)
 * 
 * headers : son informacion adicional que el cliente puede darle al servidor
 * 
 * Query string
 * Query Params : informacion extra que se le enviara al servidor
 */