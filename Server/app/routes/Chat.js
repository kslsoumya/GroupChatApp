const express = require('express')
const router =  express.Router()
const chatController = require('../controllers/chatController')
const appConfig = require('../../config/appConfig')
const auth = require('../middlewares/auth')

module.exports.setRouter = (app)=>{
    let baseUrl = `${appConfig.apiVersion}/chat`

    app.get(`${baseUrl}/get/group_chat/:id/:skip`,auth.isAuthenticated,chatController.getGroupChat)

     /**
     * @apiGroup Chat
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chat/get/group_chat/:id/:skip  Get groupChat.
     *
     * @apiParam {string} groupId Id of the group. (params) (required)
     * @apiParam {Number} skip Number of messages. (params) (required)
     * 
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
               {
                    "error": false,
                    "message": "All Group chats Listed",
                    "status": 200,
                    "data": [
                                {
                                    "senderName": "werwer",
                                    "senderId": "C8OnWW9ze",
                                    "message": "hiiiiiii",
                                    "groupId": "U7BOF7w_4",
                                    "groupName": "women ",
                                    "seen": false,
                                    "chatId": "RpIjsk4oV",
                                    "createdOn": "2018-07-23T13:19:11.117Z",
                                    "modifiedOn": "2018-07-23T13:19:13.131Z"
                                },
                                {
                                    "senderName": "wefwfwe",
                                    "senderId": "C8OnWW9ze",
                                    "message": "hiiii",
                                    "groupId": "U7BOF7w_4",
                                    "groupName": "women ",
                                    "seen": false,
                                    "chatId": "9gcATJ9AV",
                                    "createdOn": "2018-07-23T15:37:49.504Z",
                                    "modifiedOn": "2018-07-23T15:37:51.656Z"
                                },
                                {
                                    "senderName": "wefwefewf",
                                    "senderId": "C8OnWW9ze",
                                    "message": "hiiiii",
                                    "groupId": "U7BOF7w_4",
                                    "groupName": "women ",
                                    "seen": false,
                                    "chatId": "epJ3AXtCn",
                                    "createdOn": "2018-07-23T17:03:14.322Z",
                                    "modifiedOn": "2018-07-23T17:03:16.329Z"
                                }
                            ]
                }
    */



}