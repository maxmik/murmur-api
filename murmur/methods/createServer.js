import meta from '../meta'
import c from '../../constants' 
import _ from 'lodash'

export default (req, res) => {
    meta.then((connection) => {
        connection.newServer().then((server) => {
            server.start()
            server.setConf("serverpassword", "password_hash")
            server.id().then((id) => {
                let response = {
                    "id": id,
                    "password": "password_hash",
                    "url": `${c.baseUrl}:${c.port + id - 1}` 
                }
                res.json(response)
            })
        }) 
    })
}


