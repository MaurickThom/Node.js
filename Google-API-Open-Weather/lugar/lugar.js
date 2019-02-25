const axios = require('axios')
const lugarLatLng = async(direction)=>{

    let encodeUrl = encodeURI(direction)
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBKUogpwJD8WOTie2RHGDGshTTFOhGKxiU`)
    let result = resp.data
    if ( result.status==='ZERO_RESULTS' || result.status==='OVER_QUERY_LIMIT') throw new Error('No hay resultados')

    let location = result.results[0]
    let coords = location.geometry.location
    return {
        direc :location.formatted_address,
        lat:coords.lat ,
        lng : coords.lng
    }
}
module.exports = {
    lugarLatLng
}
