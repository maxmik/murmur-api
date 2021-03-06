import meta from '../meta'
import c from '../../constants' 
import _ from 'lodash'
import passwordHash from 'password-hash'

export default (req, res) => {
    meta.then((connection) => {
        connection.newServer().then((server) => {
            server.start()
            const password = _.now()
            server.setConf("serverpassword", password)
            server.id().then((id) => {
                let response = {
                    "id": id,
                    "password": password,
                    "url": `${c.baseUrl}:${c.mumblePort + id - 1}` 
                }
                res.json(response)
            })
        }) 
    })
}


