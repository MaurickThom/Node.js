const argv = require('./config/yargs').argv
const {createFile,toList} = require('./module/module')
const colors = require('colors')

switch(argv._[0]){
    case 'tolist' :
        toList(argv.base,argv.limit)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    break
    case 'create' :
        createFile(argv.base,argv.limit)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    break
    default :
        console.log('Comando desconocido')
}