const opts = {

}
const argv = require('yargs')
                    .command('create','Create',opts)
                    .command('update','Update',opts)
                    .help()
                    .argv

module.exports = {
    argv
}