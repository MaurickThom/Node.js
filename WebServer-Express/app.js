const http = require('http')

// creando un servidor 
http.createServer((request,response)=>{
    response.write('Hola mundo')
})