const fs = require('fs')
module.exports.crearArchivo =(base)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)) return reject('No es u numero')
        let data = ''
        for(let i=1;i<=10;i++){
            data+=`${base} * ${i} = ${base*i}\n`
        }
        fs.writeFile(`7-required/tablas/tabla-${base}.txt`,data,err=>{
            if(err) return reject(err)
            return resolve(`tabla-${base}.txt`)
        })
    })
}
// module.exports = {
//     crearArchivo,

// }
