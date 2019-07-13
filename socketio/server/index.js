const express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)

app.use(express.static('client'))
app.get('/',(req,res)=>{
    res.status(200)
})
let messages = [{
    id:1,
    text:'Bienvenido al chat privado',
    nickname:'Bot-William-Me-La-Pela'
}]

// abriendo una conexion al socket
io.on('connection',socket=>{ // alguien tendra en nuestra aplicacion ejecutar este evento, se encargará de recivir las
                        // conecciones de los clientes y va a detener cada vez que un clietne se conecte
    console.log(`alguien se conecto al socket con ip ${socket.handshake.address}`)
    socket.emit('messages',messages)
    socket.on('add-message',data=>{
        messages.push(data)
        io.sockets.emit('messages',messages)
    })
})

server.listen(8000,()=>console.log('Escuchando en el puerto 8000'))


