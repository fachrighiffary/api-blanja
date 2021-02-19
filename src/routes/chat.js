const express = require('express')
const chatRouter = express.Router()
const chatController = require('../controllers/chat')
const checkToken = require('../helpers/middleware/checkToken')

chatRouter.post('/addMessage', checkToken.login, chatController.addNewMessage)
chatRouter.get('/chatRoomSeller', checkToken.login, chatController.getListChatSeller)
chatRouter.get('/chatRoomBuyer', checkToken.login, chatController.getListChatBuyer)
chatRouter.get('/newMessage/:chatRoom', chatController.getNewMessage)


module.exports = chatRouter