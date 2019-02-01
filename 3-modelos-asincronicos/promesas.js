/**
 * Es un objeto que puede devolver un valor en algún momento del futuro :
 *  ya sea una respuesta de Ok o la razon por que no hay respuesta
 * 
 * Una promesa puede estar en uno de los 3 estados posibles : cumplida(resuelta),rechazada o pendiente
 * 
 * Lo mas interesante es que el callback que se pasa a la promesa son llamados incluso antes 
 * de que el constructor de la Promesa devulva el objeto creado
 * 
 * La promesa es un proxy para un valor no necesariamente conocido en el momento que es creada
 *  la promesa.Permite asociar manejadores que actuaran asincronicamente sobre un eventual
 *  valor en caso de exito, o falla:
 * 
 * Estados :
 * -Pendiente 
 *  Cumplida 
 *  rechzada   
*/
let promesa = new Promise((resolve, reject) => {
    if(true) resolve('Ok')
    else reject('No')
})

promesa
.then(response=>console.log(response))
.catch(err=>console.log(err))

let newpromesa = new Promise((resolve, reject) => {
    console.log('Inicio de promesa ... ');
    setTimeout(() => {
        resolve('Resuelto')
    }, 4000);
    setTimeout(() => {
        reject('Rechazado')
    }, 3000);
    console.log('Fin de promesa ... ');
})

newpromesa
.then(resolve=>console.log(resolve))
.catch(err=>console.log(err))


// Promise.All -- nos retorna un arreglo con los valores de las promesas
let promise_1 = new Promise((resolve,reject)=>{
    reject('Primera promesa rechazada')
})
let promise_2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Segunda promesa resulta') 
    }, 3000);
})

Promise.all([promise_1,promise_2])
.then(values=>console.log(`Los valores son ${values}`))
.catch(err=>console.log(`Ocurrio un error ${err}`))