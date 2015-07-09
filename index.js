import express from 'express'


const app = express()

app.use(require('./routes'))

app.use(function (err, req, res) {
    console.error(err.stack)
    res.json(err.status || 500, {
        message: err.message,
        error: err
    })
})

app.set('port', 4321)

var server = app.listen(4321, function () {

})
