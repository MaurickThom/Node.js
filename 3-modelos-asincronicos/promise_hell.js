// Version promise hell
const wait = numberTime =>new Promise(resolve=>setTimeout(resolve(),numberTime))
const log = console.log.bind(console)

const dummy  = payload =>wait(1000).then(()=>payload)

const user =()=>dummy({user:'jhon'})
const tweets = ()=>dummy({tweet:['noticia_1','noticia_2']})
const github = ()=>dummy({repos:['GuiaJS','NodeJS']})

const buildResult = (user,tweets,github)=>({user,tweets,github})

const fetchResult = ()=>{
	return user().then(user=>{
		return tweets().then(tweet=>{
			return github().then(rep=>{
				return buildResult(user,tweet,rep)
			})
		})
	})
}
// user().then(log)
fetchResult().then(log)

//mejor opcion con Promise.all
