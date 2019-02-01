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