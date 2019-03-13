const mongoose = require('mongoose'),
    Schema = mongoose.Schema, // representa la información y las propiedades que van a estar en un objeto de tipo user
    bcrypt = require('bcrypt-nodejs'), 
    userSchema = new Schema({
        email:{type:String,unique:true,lowercase:true,required:true},
        password : {type:String,required:true},
        name :{type:String,required:true}
    },{
        timestamps:true // mongoose agreagar atributros aparte de los que hemos declarado a nuestra base de datos en las cuales indicara cuando el usuario fue creado y cuando fue actualizado
    })

userSchema.pre('save',function(next){ // ejecutara justo antes de guardas los objetos
    const user = this

    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10,(err,salt)=>{
        if(err) next(err)
        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if(err) next(err)
            user.password=hash
            next()
        })
    })
})

// Sal(en ingles salt) (criptografia)

/**
 * 
 */


userSchema.methods.comparePassword = function(password,callback){
    bcrypt.compare(password,this.password,(err,theyAreEquals)=>{
        if(err) return callback(err)
        callback(null,theyAreEquals)
    })
}

module.exports = mongoose.model('Usuario',userSchema)