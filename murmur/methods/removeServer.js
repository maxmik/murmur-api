import meta from '../meta'
import _ from 'lodash'

export default (req, res) => {
    meta.then((connection) => {
        connection.getServer(parseInt(req.params.id)).then((server) => {
            server.isRunning().then((isRunning) => {
                if(isRunning) {
                    server.stop().then(()=> {
                        server._delete().then((id)=> {
                            res.json({"id": req.params.id})
                        }, (error) => {
                            res.status(422).json(error)
                        })
                    })
                } else { 
                    server._delete().then(()=>{
                        res.json({"id": req.params.id})
                    }, (error) => {
                        res.status(422).json(error)
                    })
                }
            })  
        }, (error) => {
            res.status(422).json(error)
        }) 
    })
}
