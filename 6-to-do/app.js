const argv = require('yargs').argv
console.log(argv)

let command = argv._[0]

switch (command.toLowerCase()) {
    case 'crear':
        console.log('Crear nota')    
        break
    case 'listar':
        console.log('Listado')
        break
    case 'actualizar' :
        console.log('Actualizando')
        break
    default:
        console.log('No existe ese comando')
    
}
