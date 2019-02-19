const fs = require('fs')

let arrToDo = []
const create = (description)=>{
    let toDo = {
        description,
        complete:false
    }
    arrToDo.push(toDo)
    return toDo
}
module.exports = {
    create
}