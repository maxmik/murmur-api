import express from 'express'
import c from './constants'


const app = express()

app.use(require('./routes'))

app.use(function (err, req, res) {
    console.error(err.stack)
    res.json(err.status || 500, {
        message: err.message,
        error: err
    })
})

app.set('port', c.port)

var server = app.listen(c.port, function () {

})
