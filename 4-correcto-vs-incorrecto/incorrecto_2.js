const usuarios = [
	{
		id: 1,
		nombre: 'thom',
		profesion_id: [1, 7]
	},
	{
		id: 2,
		nombre: 'carlos',
		profesion_id: [2, 1]
	},
	{
		id: 3,
		nombre: 'juan',
		profesion_id: [1, 3, 2]
	},
	{
		id: 4,
		nombre: 'Perez',
		profesion_id: [3, 2]
	}
]
const profesion = {
	1: 'programador',
	2: 'diseñador',
	3: 'Cocinero'
}

// mostrar usuarios con id 
const getUsuarios = (id, callback) => {
	let usuarioDB = usuarios.find(user => user.id === id)
	if (!usuarioDB) return callback(`No se encontro al user : ${id}`)
	callback(null, usuarioDB)
}
const getProfesion = (data, callback) => {
	let arrData = data.profesion_id.slice()
	for (let i = 0; i < arrData.length; i++) {
		if (!profesion[arrData[i]]) {
			return callback(`Error No encontrado la profesioncon este ID : ${arrData[i]}`)
		}
	}
	const {id,nombre} = data
	callback(null, {
		id,
		nombre,
		profesiones: arrData.map(pro => profesion[pro])
	})
}

getUsuarios(3, (err, data) => {
	if (err) return console.log(err)
	getProfesion(data, (err, data) => {
		if (err) return console.log(err)
		console.log(data)
	})
})

// mostrar a todos los usuarios que tengan ese id profesion
const getUsersIDProfesion = (idProfesion,callback)=>{
	if(!profesion[idProfesion]) return callback(`No existe ese id de profesion`)
	let arrProf = []
	
	usuarios.forEach(user=>{
		user.profesion_id.forEach(element=>{
				if(idProfesion===element) arrProf.push(user)
		})
	})
	if(arrProf.length){
		return callback(null,arrProf)
	}
}
// usuarios.forEach((user,index)=>console.log(user,index))
getUsersIDProfesion(3,(err,data)=>{
	if(err) return console.log(err)
	return console.log(data)
})