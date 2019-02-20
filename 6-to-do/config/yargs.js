const opts = {
    description:{
        demand:true,
        alias:'d'
    }
    ,
    complete:{
        alias:'c',
        default:false
    }
}
const argv = require('yargs')
                    .command('create','Create',opts)
                    .command('update','Update',opts)
                    .help()
                    .argv

module.exports = {
    argv
}