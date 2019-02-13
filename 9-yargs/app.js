const argv = require('yargs')
                .command('listar','Listando tabla',{
                    base :{
                        demand:true,
                        alias:'b',
                        default:10
                    }
                })
                .argv
const {createFile} = require('./module/module')
console.log(argv);
// comando es node app listar --base 15