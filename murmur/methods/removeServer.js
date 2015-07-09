import meta from '../meta'
import _ from 'lodash'

export default (req, res) => {

    meta.then((connection) => {
        connection.getServer(parseInt(req.params.id)).then((server) => {
            server.isRunning().then((isRunning) => {
                if(isRunning) {
                    console.log('Stopping server')
                    server.stop().then(()=> {
                        console.log('stopped')
                        res.json({"id": req.params.id})
                        server.delete()
                            .then((id)=> console.log(id))
                            .exception((error)=> console.log(error))

                    }, (error)=> console.log(error))
                } else {
                    server.delete()
                }
            })
            
        }, (error) => {
            console.log(error)
            res.status(422).json(error)
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



