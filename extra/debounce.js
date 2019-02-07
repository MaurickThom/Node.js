let timeOutId 
const alertar = (nombre,apellido)=>{
    if(timeOutId){
        clearTimeout(timeOutId)
    }
    setTimeout(()=>{
        console.log(`${nombre} ${apellido}`)
    },1000)
}

document.getElementById('btn').addEventListener('click',e=>{
    e.preventDefault()
    alertar('Thom','Roman')
})