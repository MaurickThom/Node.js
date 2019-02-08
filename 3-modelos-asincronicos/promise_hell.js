// Version promise hell
const wait = numberTime =>new Promise(resolve=>setTimeout(resolve,numberTime))
const log = console.log.bind(console)

const dummy  = payload =>wait(1000).then(()=>payload)
const user =()=>dummy({user:'jhon'})
const tweets = ()=>dummy({tweet:['GuiaJS','NodeJS']})
// user().then(log)