let socket = io.connect('http://192.168.1.8:8000',{'forceNew':true})

const render = data=>{
    let html = data.map(message=>`
        <div class='message'>
            <strong>${message.nickname}</strong> dice :
            <p>${message.text}</p>
        </div>
    `).join(' ')
    document.getElementById('messages').innerHTML= html
}
socket.on('messages',data=>render(data));
const executeEvent = id =>{
    document.getElementById(id).addEventListener('click',e=>{
        e.preventDefault()
        let message = {
            nickname:document.getElementById('nickname').value,
            text:document.getElementById('text').value
        }
        document.getElementById('nickname').style.display='none'
        socket.emit('add-message',message)
    })
}
executeEvent('input-botton')
