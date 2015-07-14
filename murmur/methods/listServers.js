import meta from '../meta'
import _ from 'lodash'
import Json from 'JSON'

export default (req, res) => {
    meta.then((connection) => {
        connection.getAllServers().then((servers) => {
            let promises = []

            servers.forEach((server, index) => {
                promises.push(processServer(server))
            })

            Promise.all(promises).then((results) => {
                res.json(results)
            })    
        }) 
    })
}

function processServer (server) {
    return new Promise((resolve, reject) => {
        let serverPromises = [
            new Promise((resolve, reject) => server.id().then((id) => resolve({"id": id}))),
            new Promise((resolve, reject) => server.isRunning().then((running) => resolve({"running": running})))
        ]
        
        Promise.all(serverPromises).then((results)=> {
            resolve(_.merge(...results))
        })  
    })
}



