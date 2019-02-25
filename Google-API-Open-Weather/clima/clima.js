// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3f87578f9f45a2e27f142c9f65e17335
const axios = require('axios')
const getClima = async (lat,long)=>{
    // return 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f87578f9f45a2e27f142c9f65e17335`)
    if (resp.cod!=200) throw new Error('Coordenas incorrectas')
    return resp.main
}
module.exports = {
    getClima
}