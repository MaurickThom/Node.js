/**
 * Es un objeto que puede devolver un valor en algún momento del futuro :
 *  ya sea una respuesta de Ok o la razon por que no hay respuesta
 * 
 * Una promesa puede estar en uno de los 3 estados posibles : cumplida(resuelta),rechazada o pendiente
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
    }, 2000);
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
    resolve('Primera promesa resulta')
})
let promise_2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Segunda promesa resulta') 
    }, 3000);
})

Promise.all([promise_1,promise_2])
.then(values=>console.log(`Los valores son ${values}`))
.catch(err=>console.log(`Ocurrio un error ${err}`))