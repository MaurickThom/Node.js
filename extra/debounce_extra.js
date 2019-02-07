let timeoutId
const alertar = (nombre, apellido) => {
	if(timeoutId) clearTimeout(timeoutId)
	timeoutId=setTimeout(() => {
		alert(`Mi nombre es ${nombre} ${apellido}`)
	}, 1000)
	
}
document.getElementById('btn')
	.addEventListener('click', e => {
		e.preventDefault()
		alertar('Thom', 'Roman')
	})