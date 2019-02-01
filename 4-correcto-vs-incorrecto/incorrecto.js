//Callback hell 
//Modelo de programación asíncrona de paso por continuadores
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

    if (!empleadoDB) callback(`Error el id: ${id} no existe`)
    else callback(null, empleadoDB)
}
const getSalario = (data, callback) => {
    let salarioDB = salarios.find(salarioObject=>salarioObject.id === data.id)
    if(!salarioDB) callback(`No se encontró el salario para la persona ${data.nombre}`)
    else  callback(null,{
        nombre : data.nombre,
        salario : salarioDB.salario
    })
}

//Aquí comienza el callback hell
getEmpleado(2, (err, data) => {
    if (err) return console.log(err)
    getSalario(data,(err,dat)=>{
        if(err) return console.log(err)
        console.log(dat)
    })
})