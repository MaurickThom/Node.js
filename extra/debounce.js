/**
 * La palabra this se conporta de una manera muy peculiar en javascript, a diferencia de otros lenguajes la palabra this se comporta DE DIFERENTE manera dependiendo del contexto en javascript
 */
const alertar = (nombre,apellido)=>{
    timeOutId = setTimeout(()=>{
        console.log(`${nombre} ${apellido}`)
    },1000)
}
const debounce=(callback)=>{
    let timeOutId 
    return ()=>{
        if(timeOutId) clearTimeout(timeOutId)
        const context= this
    }
}
document.getElementById('btn').addEventListener('click',e=>{
    e.preventDefault()
    alertar('Thom','Roman')
})