// Request trabaja en base a callback 
// Axios trabaja en base a promesas

// Make http requests from node.js

const {getCoordsOf} = require('./module_/wrapper.js')
const argv =require('yargs').options({
    direction:{
        alias:'d',
        desc:'Dirección de la ciudad',
        demand:true
    }
}).help().argv
console.log(argv.direction);

getCoordsOf(argv.direction)
.then(console.log)
.catch(console.error)