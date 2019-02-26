const http = require('http')

// creando un servidor 
http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-type':'application/json'
    })
    let salida = {
        nombre:'Thom',
        edad:20,
        url :request.url
    }
    // response.write('Hola mundo')
    response.write(JSON.stringify(salida))
    response.end()
})
.listen(8080)

console.log('Escuchando el puerto 8080');