function f1() {
	"use strict" // en este modo el this se mantiene lo que esta establecida al entrar en el contexto de ejecución
	return this
}
const f2 = () => {
	"use strict"
	return this
}
console.log(f1() === global)
console.log(f1())
console.log(f2() === global)
console.log(f2())

// Cuando una funcion usa la palabra this en su cuerpo , su valor puede ser enlazado a un objeto particular duraante la ejecucion del metodo call() o apply()
// function add(c, d) {
// 	return this.a + this.b + c + d;
// }

// var o = {
// 	a: 1,
// 	b: 3
// };

// // El primer parámetro es el objeto a usar como 'this', parámetros posteriores se pasan como argumentos
// // en la llamada a la función 
// add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// //El primer parámetro es el objeto a usar como 'this''this', la segunda es una matriz cuyos elementos 
// //  se utilizan como argumentos en la llamada a la función 
// add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34