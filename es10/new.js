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

let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]