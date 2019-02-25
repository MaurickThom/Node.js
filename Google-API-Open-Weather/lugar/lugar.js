const axios = require('axios')
const lugarLatLng = async(direction)=>{

    let encodeUrl = encodeURI(direction)
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBKUogpwJD8WOTie2RHGDGshTTFOhGKxiU`)
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
    return {
        direc ,
        lat ,
        lng
    }
}
module.exports = {
    lugarLatLng
}
