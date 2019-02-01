let myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(5)
    }, 2000);
})

myPromise
.then(number=>number*2)
.then(number=>number*5)
.then(number=>console.log(number))
.catch(err=>console.log(err))