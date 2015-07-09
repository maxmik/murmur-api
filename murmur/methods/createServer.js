import meta from '../meta'
import _ from 'lodash'

export default (req, res) => {
    meta.then((connection) => {
        connection.newServer().then((server) => {
            server.start()
            server.id().then((id) => res.json({"id": id}))
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



