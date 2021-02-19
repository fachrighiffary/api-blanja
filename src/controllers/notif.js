const notifModel = require('../models/notif')

module.exports = {
    postNotif: (req, res) => {
        let {body} = req
        body = {
            ...body,
            created_at: new Date(Date.now())
        }
        notifModel.postNotif(body)
        .then((result) => {
            res.status(result.status).json(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    },
    postNotifSeller : (req, res) => {
        let {body} = req
        body = {
            ...body,
            created_at: new Date(Date.now())
        }
        notifModel.postNotifSeller(body)
        .then((result) => {
            res.status(result.status).json(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    },
    getNotifSeller : (req, res) => {
        let {id} = req.params
        notifModel.getNotifSeller(id)
        .then((data) => {
            if(data.length){
                res.json({
                    data,
                })
            }else{
                res.status(400).json({
                    msg: "Data Not Found"
                })
            }
        })
    },
    getNotifBuyer : (req, res) => {
        let {id} = req.params
        notifModel.getNotifBuyer(id)
        .then((data) => {
            if(data.length){
                res.json({
                    data,
                })
            }else{
                res.status(400).json({
                    msg: "Data Not Found"
                })
            }
        })
    },
    deleteNotifseller : (req, res) => {
        let {id} = req.params
        notifModel.deleteNotifseller(id)
        .then((result) => {
            res.status(result.status).json(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    },
    deleteNotifBuyer : (req, res) => {
        let {id} = req.params
        notifModel.deleteNotifBuyer(id)
        .then((result) => {
            res.status(result.status).json(result)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    }
}