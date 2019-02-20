// const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const {create,toList,update,deleteElement} = require('./to-do/to-do')

const colors = require('colors')
console.log(argv)

let command = argv._[0]
let complete = String(argv.complete) ==='true'
switch (command.toLowerCase()) {
    case 'create':
        console.log(create(argv.description,complete));
        console.log('Crear nota'.green)
        break
    case 'list':
        console.log(toList());
        
        break
    case 'update' : // esto solo actualizara
        update(argv.description,complete)
        break
    case 'delete':
        deleteElement(argv.description)
        break
    default:
        console.log('No existe ese comando'.red)
    
}
