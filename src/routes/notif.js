const express = require("express")
const notifRouter = express.Router()
const notifController = require('../controllers/notif')

notifRouter.post('/', notifController.postNotif)
notifRouter.post('/seller', notifController.postNotifSeller)
notifRouter.get('/seller/:id', notifController.getNotifSeller)
notifRouter.get('/buyer/:id', notifController.getNotifBuyer)
notifRouter.delete('/seller/:id', notifController.deleteNotifseller)
notifRouter.delete('/buyer/:id', notifController.deleteNotifBuyer)

module.exports = notifRouter