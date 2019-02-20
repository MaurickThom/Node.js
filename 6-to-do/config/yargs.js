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
const deleteObject = {
    description:{
        demand:true,
        alias:'d'
    }
}
const argv = require('yargs')
                    .command('create','Create',opts)
                    .command('update','Update',opts)
                    .command('delete','Delete',deleteObject)
                    .help()
                    .argv

module.exports = {
    argv
}