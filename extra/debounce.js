
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