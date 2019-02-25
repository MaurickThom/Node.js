const {lugarLatLng} = require('../lugar/lugar.js')
const {getClima} = require('../clima/clima')

const getCoordsOf = async(direction)=>{
    const resp = await lugarLatLng(direction)
    const data  = await getClima(resp.lat,resp.long)
    return{
        country : resp.direct,
        data
    }
}
module.exports ={
    getCoordsOf
}