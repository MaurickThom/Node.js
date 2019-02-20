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
const list = {
    complete:{
        alias:'c'
    }
}
const argv = require('yargs')
                    .command('create','Create',opts)
                    .command('update','Update',opts)
                    .command('delete','Delete',deleteObject)
                    .command('list','List',list)
                    .help()
                    .argv

module.exports = {
    argv
}