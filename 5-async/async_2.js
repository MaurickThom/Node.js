const getName = (username)=>{
    const URL = `http://api.github.com/users/${username}`
    fetch(URL)
        .then(response=>response.json())
        .then(data=>console.log(data))
}
getName('UsuarioTemporal')