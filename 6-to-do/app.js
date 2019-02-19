// const argv = require('yargs').argv
const argv = require('./config/yargs').argv
if(!argv) return console.log('Error'.red)
const colors = require('colors')
console.log(argv)

let command = argv._[0]

switch (command.toLowerCase()) {
    case 'crear':
        console.log('Crear nota'.green)    
        break
    case 'listar':
        console.log('Listado'.green)
        break
    case 'actualizar' :
        console.log('Actualizando'.green)
        break
    default:
        console.log('No existe ese comando'.red)
    
}
