const argv = require('yargs')
                .command('tolist','Listando tabla',{
                    base :{
                        demand:true,
                        alias:'b'
                    },
                    limit :{
                        alias:'l',
                        default:10
                    }
                })
                .help()
                .argv
const {createFile,toList} = require('./module/module')
console.log(argv)
// comando es node app listar --base 15
switch(argv._[0]){
    case 'tolist' :
        toList(argv.base,argv.limit)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    break
    case 'create' :
        createFile(argv.base)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    break
    default :
        console.log('Comando desconocido')
}