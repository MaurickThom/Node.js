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