let empleados = [{
    id: 1,
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

const getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback('Error')
    } else {
        callback(null, empleadoDB)
    }
}
const getSalario = (empleado, callback) => {

}

getEmpleado(1, (err, data) => {
    if (err) return console.log(err)
    console.log(data)
})