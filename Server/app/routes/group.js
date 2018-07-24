const express = require('express')
const router =  express.Router()
const groupController = require('../controllers/groupController')
const appConfig = require('../../config/appConfig')
const auth = require('../middlewares/auth')

module.exports.setRouter = (app)=>{
    let baseUrl = `${appConfig.apiVersion}/group`


    app.post(`${baseUrl}/create`,auth.isAuthenticated,groupController.createGroup)

    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/create Create Group.
     *
     * @apiParam {string} title title of the group. (body params) (required)
     * @apiParam {string} name name of the admin. (body params) (required)
     * @apiParam {string} id Id of the admin. (body params) (required)
     * @apiParam {string} status Status Line for the group. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                {
                        "error": false,
                        "message": "Created Group successfully",
                        "status": 200,
                        "data": {
                                    "groupName": "PSU",
                                    "adminName": "abc",
                                    "adminId": "DSfoJbEk8",
                                    "isActive": false,
                                    "isMember": false,
                                    "messageList": [],
                                    "status": "I am great"
                                    "groupId": "vnlrWDAWb",
                                    "createdOn": "2018-07-24T13:38:27.000Z",
                                    "modifiedOn": "2018-07-24T13:38:27.271Z"
                                }
                }
    */

    app.get(`${baseUrl}/get/:userId`,auth.isAuthenticated,groupController.getGroups)

    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/group/get/:userId  Get Groups.
     *
     * @apiParam {string} userId Id of the user. (params) (required)
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                {
                    "error": false,
                    "message": "Groups retrieved",
                    "status": 200,
                    "data": [
                        {
                            "groupName": "PSU",
                            "adminName": "abc",
                            "adminId": "DSfoJbEk8",
                            "isActive": false,
                            "isMember": false,
                            "messageList": [],
                            "status": "I am great",
                            "groupId": "vnlrWDAWb",
                            "createdOn": "2018-07-24T13:38:27.000Z",
                            "modifiedOn": "2018-07-24T13:38:27.271Z"
                        }
                    ]
                }
    */


    app.get(`${baseUrl}/get_group/:groupId`,auth.isAuthenticated,groupController.getSingleGroup)

    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/group/get_group/:groupId  Get single group.
     *
     * @apiParam {string} groupId Id of the group. (params) (required)
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                {
                    "error": false,
                    "message": "Group details Found Succesfully",
                    "status": 200,
                    "data": {
                                "groupName": "PSU",
                                "adminName": "abc",
                                "adminId": "DSfoJbEk8",
                                "isActive": false,
                                "isMember": false,
                                "messageList": [],
                                "status": "I am great",
                                "groupId": "vnlrWDAWb",
                                "createdOn": "2018-07-24T13:38:27.000Z",
                                "modifiedOn": "2018-07-24T13:38:27.271Z"
                            }
                }
    */


    app.get(`${baseUrl}/get/active/:userId`,auth.isAuthenticated,groupController.getActiveGroups)

    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {get} /api/v1/group/get/active/:userId  Get Active groups.
     *
     * @apiParam {string} userId Id of the user. (params) (required)
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
               {
                "error": false,
                "message": "Groups Found Succesfully",
                "status": 200,
                "data": [
                    {
                        "groupName": "PSU",
                        "adminName": "asafsdfd",
                        "adminId": "AAwW5AL4y",
                        "isActive": true,
                        "isMember": false,
                        "messageList": [],
                        "status": "hardwork",
                        "_id": "5b55a5fff3cdf916dcdeddd7",
                        "groupId": "XolysrhNa",
                        "createdOn": "2018-07-23T09:55:11.000Z",
                        "modifiedOn": "2018-07-23T09:55:11.197Z",
                        "__v": 0
                    },
                    {
                        "groupName": "Apple",
                        "adminName": "qwrwerwe",
                        "adminId": "C8OnWW9ze",
                        "isActive": true,
                        "isMember": false,
                        "messageList": [],
                        "status": "iphone is my love",
                        "_id": "5b55c582d0f57d2bf4540236",
                        "groupId": "UREK5dTeY",
                        "createdOn": "2018-07-23T12:09:38.000Z",
                        "modifiedOn": "2018-07-23T12:09:38.505Z",
                        "__v": 0
                    }
                ]
            }
    */




    app.put(`${baseUrl}/edit/:groupId`,auth.isAuthenticated,groupController.editGroup)

    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {put} /api/v1/group/edit/:groupId  Edit group.
     *
     * @apiParam {string} groupId Id of the group. (params) (required)
     * 
     * @apiParam {string} groupdetails  details of the group to be changed. (body params) (required)
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                {
                    "error": false,
                    "message": "Group details Found Succesfully",
                    "status": 200,
                   data:
                        {
                            n: 1, 
                            nModified: 1, ok: 1
                        }
                }
    */


    app.post(`${baseUrl}/delete/:groupId`,auth.isAuthenticated,groupController.deleteGroup)


    /**
     * @apiGroup Groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/delete/:groupId  Delete Group.
     *
     * @apiParam {string} groupId Id of the group. (params) (required)
     * 
     * 
     * @apiParam {string} authToken authToken of the user. (body params or queryparams) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
                {
                    "error": false,
                    "message": "Group Deleted Succesfully",
                    "status": 200,
                    "data": {
                            "n": 1,
                            "ok": 1
                        }
                }   
    */

}