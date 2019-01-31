const  aFunction = (value,callback)=>{
    console.log(`Value ${value}`)
    setTimeout(() => {
        callback(value,Math.pow(value,2)) 
    }, 0 | Math.random()*100)
}

aFunction(3,(value,result)=>{
    console.log(`Value ${value} result ${result}`);
})

console.log('finish?')
