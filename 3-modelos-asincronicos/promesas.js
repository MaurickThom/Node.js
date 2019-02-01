/**
 * Es un objeto que puede devolver un valor en algún momento del futuro :
 *  ya sea una respuesta de Ok o la razon por que no hay respuesta
 * 
 * Una promesa puede estar en uno de los 3 estados posibles : cumplida(resuelta),rechazada o pendiente
*/
let promesa = new Promise((resolve, reject) => {
    if(false) resolve('Ok')
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