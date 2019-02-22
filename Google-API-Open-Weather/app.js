// Request trabaja en base a callback 
// Axios trabaja en base a promesas
const argv =require('yargs').options({
    direction:{
        alias:'d',
        desc:'Dirección de la ciudad'
    }
})