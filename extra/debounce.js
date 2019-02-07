/**
 * La palabra this se conporta de una manera muy peculiar en javascript, a diferencia de otros lenguajes la palabra this se comporta DE DIFERENTE manera dependiendo del contexto en javascript.
 * 
 * El valor this está determiandno por cómo se llama a la funcion.No puede ser establecida por una asignacion en tiempo de ejecucion , y esto puede ser diferente cada vez que la funcion es llamada.
 * 
 * ES5 introdujo el método bind() para establecer el valor de la funcion this independientemente de como es llamada
 * 
 * 
 * La palabra this dentro de una funcion depende de como es llamada
 */
// let timeOutId 
// const alertar = (nombre,apellido)=>{
//     if(timeOutId) clearTimeout(timeOutId)
//     timeOutId = setTimeout(()=>{
//         console.log(`${nombre} ${apellido}`)
//     },1000)
// }

// document.getElementById('btn').addEventListener('click',e=>{
//     e.preventDefault()
//     alertar('Thom','Roman')
// })
function alertar(nombre, apellido) {
	alert(`Hola ${nombre} ${apellido}`)
}

function debounce(callback,tiempo) {
	let timeoutId
	return function () {
		if (timeoutId) clearTimeout(timeoutId)
		const context = this
		const args = arguments
		console.log(context)
		console.log(args)
		setTimeout(() => {
			callback.apply(context,args)
		},tiempo)
	}
}
const alertarDebounce = debounce(alertar)
document.getElementById('btn')
	.addEventListener('click',e=>{
		e.preventDefault()
		alertarDebounce('Thom','Roman',1000)
	})