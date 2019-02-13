// const multiplicar = require('./modul')
// multiplicar.crearArchivo()

const {crearArchivo} = require('./modul')
crearArchivo('53f').then(response=>console.log(response))
                .catch(err=>console.log(err))