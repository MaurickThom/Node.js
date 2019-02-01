/**
 * Es un objeto que puede devolver un valor en algún momento del futuro :
 *  ya sea una respuesta de Ok o la razon por que no hay respuesta
 * 
 * Una promesa puede estar en uno de los 3 estados posibles : cimplida,rechazada o pendiente
*/
let promesa = new Promise((resolve, reject) => {
    if(true) resolve('Ok')
    else reject('No')
})

promesa
.then(response=>console.log(response))
.catch(err=>console.log(err))