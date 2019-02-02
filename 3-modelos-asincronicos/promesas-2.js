let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(5)
    }, 2000);
})

myPromise
.then(number=>number*2)
.then(number=>number*5)
.then(number=>console.log(number))
.catch(err=>console.log(err))

/**
 * Javascript es un lenguaje de un solo hilo sin interrrupcion .
 * Asincrono y concurrente .Tiene una pila de ejecucion un bucle de eventos una cola de callback acceso a otras APis
 */
let firtsPromise=new Promise((resolve,reject)=>{
    resolve('Primera promesa')
})
let secondPromise=new Promise((resolve,reject)=>{
    resolve('Segunda pregunta')
})

firtsPromise.
then(response=>{
    return secondPromise
},err=>console.log(err))
.then(response=>console.log(response))