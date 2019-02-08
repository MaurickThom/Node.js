/**
 * Este método crea una nueva función que cuando se manda a llamar tiene 
 * tiene un contexto 'this' asignado por nosotros
 * 
 * Creado para manipular el valor contextual de this.Cuando se ejecuta sobre una funcion dada , creamos una nueva funcion que nos permite manipular tanto su valor this como los parametros de espera
*/


let fn_1 = function(one,two){
    console.info(this,one,two)
}
let fn_2 = (one,two)=>{
    console.info(this,one,two)
}
// fn_1(1,2)
// fn_2(3,4)

let newFn_1 = fn_1.bind(console)
let newFn_1_plus = fn_1.bind(console,'Uno','Dos')
newFn_1('1','2')
newFn_1_plus('1','2')
let myObject = {
    name:'Thom'
}
let otherFun = fn_1.apply(myObject,[1,2])
