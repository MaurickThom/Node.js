const express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)

server.listen(8000,()=>console.log('Escuchando en el puerto 8000'))


