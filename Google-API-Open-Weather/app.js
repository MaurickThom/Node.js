// Request trabaja en base a callback 
// Axios trabaja en base a promesas

// Make http requests from node.js

const axios = require('axios')
const argv =require('yargs').options({
    direction:{
        alias:'d',
        desc:'Dirección de la ciudad',
        demand:true
    }
}).help().argv
console.log(argv.direction);
let encodeUrl = encodeURI(argv.direction)
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBKUogpwJD8WOTie2RHGDGshTTFOhGKxiU`)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Error");
});