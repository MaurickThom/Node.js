//usando promesas para la solucion del callback hell

let empleados = [{
    id: 4,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'carlos'
}, {
    id: 3,
    nombre: 'juan'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) return reject(`Error el id ${id} no existe`)
        return resolve(empleadoDB)
    })
}
const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) return reject(`No se encontró el salario para la persona ${empleado.nombre}`)
        return resolve({
            nombre : empleado.nombre,
            salario:salarioDB.salario
        })
    })
}

// Promise hell --recomendacion usar async await
// getEmpleado(4)
//     .then(response=>{
//         getSalario(response)
//             .then(response=>{
//                 console.log(response)
//             },err=>console.log(err))
//     },err=>console.log(err))

//Resultado con async await
const fetchResult = async(id)=>{
    const response = await getEmpleado(id)
    const data = await getSalario(response)
    // if(data.status !==200) return response
    return data
}
// console.log(`Usando Async await`)
fetchResult(4)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))