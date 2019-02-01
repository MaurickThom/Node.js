const isValidJSON = (text)=>{
    try {
        JSON.parse(text)
        return true
    } catch{ // no es necesario colocarle la variable de la exception
        return false
    }
}
let obj = `{
    "name" : "Thom",
    "apellido" : "Roman"
}`
console.log(isValidJSON(obj))

// crea una matriz con todos los elementos de sub-array concatenados recursivamente hasta la profuncdidad especifica
let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
console.log(arr.flat(4));

const res = arr.map(x=>[x,x*2])
console.log(res);
console.log(arr.flatMap(x=>[x,x*2]))

// const myObject = {
//     key_1 : 'value1',
//     key_2 : 'value2',
//     key_3 : 'value3'
// }
// const entries = Object.entries(myObject)
// console.log(entries)
// const originalObject = Object.fromEntries(entries) // convertir un array a objeto literal
