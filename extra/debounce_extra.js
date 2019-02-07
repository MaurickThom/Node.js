
// Este método es correcto pero estamos amarrando la tecnica a una funcion

// let timeoutId
// const alertar = (nombre, apellido) => {
// 	if(timeoutId) clearTimeout(timeoutId)
// 	timeoutId=setTimeout(() => {
// 		alert(`Mi nombre es ${nombre} ${apellido}`)
// 	}, 1000)
	
// }
// document.getElementById('btn')
// 	.addEventListener('click', e => {
// 		e.preventDefault()
// 		alertar('Thom', 'Roman')
// 	})

// separando la tecnica de la una funcion

const myAlert=(name,surname)=>{
	alert(`My name is ${name} ${surname}`)
}

const debounce = (callback,time)=>{
	let timeoutId
	return function(){
		if(timeoutId) clearTimeout(timeoutId)
		console.log(this)
		console.log(arguments)
		timeoutId=setTimeout(()=>{
			callback.apply(this,arguments)
		},time)
	}
}
const triggerAlert = debounce(myAlert,100)
document.getElementById('btn')
	.addEventListener('click',e=>{
		e.preventDefault()
		triggerAlert('Thom','Roman')
	})