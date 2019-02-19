const fs = require('fs')
const fetch = require('node-fetch')
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
    try {
        arrToDo = require('../db/data.json')
    } catch (error) {
        arrToDo = []
    }
}
const create = (description,complete)=>{
    loadingDB()
    
    let toDo = {
        description,
        complete
    }
    arrToDo.push(toDo)
    saveDB().then(result=>console.log(result.green))
            .catch(err=>console.log(err.red))
    return toDo
}
module.exports = {
    create
}