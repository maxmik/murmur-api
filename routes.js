import express from 'express'
import methods from './murmur/methods'

const router = express.Router()

router.get('/servers', (req, res) => {
    methods.listServers(req,res)
})

router.get('/servers/:id', (req, res) => {
    methods.getServerInfo(req,res)
})

router.post('/servers', (req, res) => {
    methods.createServer(req,res)
})

router.delete('/servers/:id', (req, res) => {
    methods.removeServer(req, res)
})

router.get('*', function (req, res) {
    res.header('Cache-Control', 'no-cache, private, no-store, max-age=0')
    res.header('Expires', 'Fri, 31 Dec 1998 12:00:00 GMT')

    res.send("sup fool")
})

export default router