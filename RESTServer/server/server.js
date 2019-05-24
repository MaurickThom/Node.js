const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000

app.get('/',(request,response)=>{
    
})
.listen(port,()=>console.log(`Escuchando en el puerto ${port}`))