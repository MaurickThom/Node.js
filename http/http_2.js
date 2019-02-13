const express = require('express')

const app = express()

app.get('/',(req,resp) => {
    resp.send('server')
})

app.listen(3000,()=>{
    console.log('Puerto 3000')
})

// Verbos