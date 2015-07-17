import meta from '../meta'
import c from '../../constants' 
import _ from 'lodash'

export default (req, res) => {
    meta.then((connection) => {
        connection.getServer(parseInt(req.params.id)).then((server) => {
            server.getAllConf().then((confs) => {
                confs.forEach((key) => {
                    console.log(key)
                })
            })
            res.json({"id": req.params.id})
        }) 
    })
}
