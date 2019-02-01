// Un iterable es un objeto que contiene el metodo Symbol.iterator
let colores = ['amarillo','azul'] // elemento iterable
const iterador = (arr)=>{
    let count = 0
    return {
        next(){
            if(count<arr.length) return {value : arr[count++],done: false}
            else return {value:undefined,done:true}
        }
    }
}

let objIterator = iterador(colores)
// console.log(objIterator);
console.log(objIterator.next());
console.log(objIterator.next());
console.log(objIterator.next());