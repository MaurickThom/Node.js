// const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const {create,toList,update} = require('./to-do/to-do')

const colors = require('colors')
console.log(argv)

let command = argv._[0]

switch (command.toLowerCase()) {
    case 'create':
        console.log(create(argv.description,argv.complete));
        console.log('Crear nota'.green)
        break
    case 'list':
        console.log(toList());
        
        break
    case 'update' : // esto solo actualizara
        update(argv.description,argv.complete)
        break
    default:
        console.log('No existe ese comando'.red)
    
}
