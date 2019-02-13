// const multiplicar = require('./modul')
// multiplicar.crearArchivo()

const {crearArchivo} = require('./modul')
crearArchivo(5).then(response=>console.log(response))
                .catch(err=>console.log(err))