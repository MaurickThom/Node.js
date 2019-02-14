const fs = require('fs')
const createFile = (base,limite)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) && !Number(limite)) return reject(`${base} no es un número`)
        let data = ``
        for (let i = 1; i <=limite; i++) {
            data+=`${base} * ${i} = ${base*i}\n`
        }
        fs.writeFile(`9-yargs/table/table-${base}.txt`,data,err=>{
            if (err) return reject(err)
            return resolve(`table-${base}.txt`)
        })
    })
}
const toList =(base,limite)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) && !Number(limite)) return reject(`${base} no es un número`)
        let data = ``
        for (let i = 1; i <=limite; i++) {
            data+=`${base} * ${i} = ${base*i}\n`
        }
        return resolve(data)
    })
}
module.exports ={
    createFile,
    toList
}