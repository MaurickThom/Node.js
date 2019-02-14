const fs = require('fs')
const createFile = (base,limit)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base) || !Number(limit)) return reject('El paramatro ingresado no es el correcto')
        let data = ``
        for(let i=1;i<=limit;i++){
            data+=`${base}*${i}=${base*i}\n`
        }
        fs.writeFile(``,data,err=>{
            if(err) return reject(err)
            return resolve(data)
        })
    })
}

const  toList =()=>{

}
module.exports = {
    createFile,
    toList
}
