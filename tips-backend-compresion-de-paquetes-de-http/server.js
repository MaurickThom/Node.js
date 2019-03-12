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
    
}
