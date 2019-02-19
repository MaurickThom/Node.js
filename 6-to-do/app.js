// const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const toDo = require('./to.do/to-do')

const colors = require('colors')
console.log(argv)

let command = argv._[0]

switch (command.toLowerCase()) {
    case 'create':
        console.log(toDo.create(argv.description,argv.complete));
        console.log('Crear nota'.green)    
        break
    case 'list':
        console.log('Listado'.green)
        break
    case 'update' :
        console.log('Actualizando'.green)
        break
    default:
        console.log('No existe ese comando'.red)
    
}
