const mongoose = require('mongoose'),
    Schema = mongoose.Schema, // representa la información y las propiedades que van a estar en un objeto de tipo user
    userSchema = new Schema({
        email:{type:String,unique:true,lowercase:true,required:true},
        password : {type:String,required:true},
        name :{type:String,required:true}
    },{
        timestamps:true // mongoose agreagar atributros aparte de los que hemos declarado a nuestra base de datos en las cuales indicara cuando el usuario fue creado y cuando fue actualizado
    })
