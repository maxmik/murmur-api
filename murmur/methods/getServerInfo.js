import meta from '../meta'
import c from '../../constants' 
import _ from 'lodash'

export default (req, res) => {
    meta.then((connection) => {
        connection.getServer(parseInt(req.params.id)).then((server) => {
            server.getAllConf().then((confs) => {
                console.log(confs.size, confs.keys)
                confs.forEach((key) => {
                    console.log(key)
                })
            })
            res.json({"id": req.params.id})
        }) 
    })
}

// function processServer (server) {
//     return new Promise((resolve, reject) => {
//         let serverPromises = [
//             new Promise((resolve, reject) => server.id().then((id) => resolve({"id": id}))),
//             new Promise((resolve, reject) => server.isRunning().then((running) => resolve({"running": running}))),
//             new Promise((resolve, reject) => server.getUsers().then((users) => resolve({"users": users.size || 0})))
//         ]
        
//         Promise.all(serverPromises).then((results)=> {
//             resolve(_.merge(...results))
//         })  
//     })
// }



