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
    console.log(result.data);
    let location = result.data.results[0]
    let coords = location.geometry.location

    console.log('Dirección : ',location.formatted_address)
    console.log('Lat : ',coords.lat);
    console.log('Lng : ',coords.lng);
}).catch((err) => {
    console.log("Error");
});