const express = require('express'),
    request = require('request-promise-native'),
    app = express()

app.use(express.static(`${__dirname}/public`))
    .set('views',`${__dirname}/views`)
    .set('view engine','pug')
    .get('/',async (request,response)=>{
        let images = await getDataForPage()
        response.render('index',{images})
    })
const getDataForPage = async _=>{
    let pics = ['1','2','3']
    let responsePromises = []

    let responsePromise

    pics.forEach(picID=>{
        responsePromise = request.get({
            uri:``,
            encoding:null,
            resolveWithFullResponse:true
        })
        responsePromises.push(responsePromise)
    })
}
