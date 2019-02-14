const opts = {
    base :{
        demand : true,
        alias:'b'
    },
    limit:{
        alias : 'l',
        default : 10
    }
}
const argv = require('yargs')
                .command('tolist','listando',opts)
                .command('create','creando',opts)
                .help()
                .argv

module.exports={
    argv
}