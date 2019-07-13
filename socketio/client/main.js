let socket = io.connect('http://192.168.1.8:8000',{'forceNew':true})
socket.on('messages',data=>console.log(data))

const render = data=>{
    let html = data.map(message=>null)
}