const app = require('./app'),
    log = console.log

app.listen(app.get('port'),()=>{
    log(`Iniciando Express en el puerto ${app.get('port')}`)
})