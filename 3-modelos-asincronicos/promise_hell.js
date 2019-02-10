const wait = delay => new Promise(resolve=>setTimeout(resolve(),delay))
const log = console.log.bind(console)

const dummy = payload=>wait(1000).then(()=>payload)

const user= ()=>dummy({user:'Thom'})
const tweets = ()=>dummy({tweets:['notify_1','notify_2']})
const github = ()=>dummy({repositories:['GuiaJS','NodeJS','Guia_Python']})

const buildResult = (user,tweets,github)=>({user,tweets,github})


// Promise Hell (Aggg xdxd) >:(
const fetchResult = ()=>{
	return user()
		.then(user=>{
			return tweets()
					.then(twts=>{
						return github()
								.then(rep=>{
									return buildResult(user,twts,rep)
								})
					})
		})
}
// fetchResult()
// 	.then(log)

// Promise all :)
const liftPromises = fn =>(...args)=>Promise.all(args).then(args=>fn(...args))
const fetcResultPromiseLift =()=>liftPromises(buildResult)(user(),tweets(),github())
fetcResultPromiseLift().then(log)

