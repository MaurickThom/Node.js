const fetch = require('node-fetch')

const getName = (username)=>{
    const URL = `http://api.github.com/users/${username}`
    fetch(URL)
        .then(response=>response.json())
        .then(data=>console.log(data))
}
// getName('UsuarioTemporal')

const asyncGetName= async (username)=>{
    const URL = `http://api.github.com/users/${username}`
    const response = await fetch(URL)
    const data = await response.json()
    return data
}
asyncGetName('UsuarioTemporal').then(response=>console.log(response))
// console.log(asyncGetName('UsuarioTemporal')); Estp retorna Promise { <pending> }