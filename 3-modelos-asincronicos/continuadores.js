// Tambien conocido como callbacks

/**
 * Modelo nativo que utiliza nodejs en sus API's para dar soporte a la
 *  programacion asincrona es el paso de continuadores.Cada operacion no bloqueante recibe una funcion como ultimo parametro que incluye la lógica
 *  de continuadores que debe ser invocada tras la finalizacion de la
 *  misma tanto para procesar los resutlados en caso de exito como para
 *  dar los fallos en caso de error.
 * 
 * La funcion de continuacion permite indicar a la operacion bloqueante
 *  como debe procesar despues de finalizada la operacion.
 */

//Proveedor
const div=(a,b,callback)=>{
    if(b==0) callback('Error ,el denominador no puede ser cero')
    else{
        let result = a/b 
        callback(null,result)
    }
}

//Cliente
div(8,0,(err,data=0)=>{
    if(err) console.log(err);
    else console.log(data);
})

div(8,3,(err,data=0)=>{
    if(err) console.log(err);
    else console.log(data);
})