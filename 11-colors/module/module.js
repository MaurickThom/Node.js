const fs = require('fs')
const colors = require('colors')
const createFile = (base,limit)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) || !Number(limit)) return reject('El paramatro ingresado no es el correcto')
        let data = ``
        for(let i=1;i<=limit;i++){
            data+=`${base}*${i}=${base*i}\n`
        }
        fs.writeFile(`10-yargs-config/table/table-${base}.txt`,data.blue,err=>{
            if(err) return reject(err)
            return resolve(`table-${base}.txt`)
        })
    })
}

const  toList =(base,limit)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) || !Number(limit)) return reject('El paramatro ingresado no es el correcto')
        let data = ``
        for(let i = 1 ;i<=limit;i++){
            data+=`${base}*${i}=${base*i}\n`
        }
        return resolve(data.green)
    })
}
module.exports = {
    createFile,
    toList
}
