const fs = require('fs')
const colors = require('colors')
let arrToDo = []

const saveDB = ()=>{
    return new Promise((resolve,reject)=>{
        let data =JSON.stringify(arrToDo)
        if(!data) return reject('Error data is empty')
        fs.writeFile('db/data.json',data,err=>{
            if(err) return reject(err)
            return resolve(data)
        })
    })
}

const loadingDB = ()=>{
    arrToDo = require('../db/data.json')
}
const create = (description)=>{
    let toDo = {
        description,
        complete:false
    }
    loadingDB()
    arrToDo.push(toDo)
    saveDB().then(result=>console.log(result.green))
            .catch(err=>console.log(err.red))
    return toDo
}
module.exports = {
    create
}