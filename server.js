const express = require('express')
const app = express()
const port = 3000
const phpExpress = require('php-express')({
    binPath: 'php'
})

app.set('views', './views')
app.engine('php', phpExpress.engine)
app.set('view engine', 'php')
app.all(/.+\.php$/, phpExpress.router)

app.get('/', (req, res) => res.send('hello world'))

const server = app.listen(port, function() {
    const host = server.address().address
    const port = server.address().port;
    console.log('PHPExpress app listening at http://%s:%s', host, port)
})