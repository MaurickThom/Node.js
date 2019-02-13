// const multiplicar = require('./modul')
// multiplicar.crearArchivo()

const {crearArchivo} = require('./modul')

// process - cuando node se ejecuta crea esta variable de entorno
// console.log(process.argv[2]);
let argv = process.argv
let param = argv[2]
let base = param.split('=')

crearArchivo(base[1]).then(response=>console.log(response))
                .catch(err=>console.log(err))