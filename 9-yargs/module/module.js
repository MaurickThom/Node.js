const fs = require('fs')
module.exports.createFile = (base=10)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)) return reject(`${base} no es un número`)
        let data = ``
        for (let i = 1; i <=10; i++) {
            data+=`${base} * ${i} = ${base*i}\n`
        }
        fs.writeFile(`9-yargs/table/table-${base}.txt`,data,err=>{
            if (err) return reject(err)
            return resolve(`table-${base}.txt`)
        })
    })
}