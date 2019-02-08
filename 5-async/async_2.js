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
    if(response.status!==200) throw Error('El usuario no existe')
    console.log(data.name)

    return data
}
asyncGetName('UsuarioTemporal')
    .then(response=>console.log(response))
    .catch(err=>console.log(err));
// console.log(asyncGetName('UsuarioTemporal')); Estp retorna Promise { <pending> }


(async ()=>{
    try{
        const user = await asyncGetName('UsuarioTemporal')
        console.log(user)
    }catch(err){
        console.log(err)
    }
})();