
const mongoose = require('mongoose')
const shortId = require('shortid')
const check = require('../libs/checkLib')
const time = require('./../libs/timeLib');

const groupModel = mongoose.model('Group')
const logger = require('../libs/loggerLib')
const response = require('../libs/responseLib')


// Create Group Function---

let createGroup = (req, res) => {
    groupModel.findOne({ 'title': req.body.title })
        .exec((err, retrievedRoomDetails) => {
            if (err) {
                logger.error('Failed To Create Group', 'Group Controller:Create Group()', 10)
                let apiResponse = response.generate(true, 'Failed to create Group', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(retrievedRoomDetails)) {
                console.log(req.body)
                let newGroup = new groupModel({
                    groupId: shortId.generate(),
                    groupName: req.body.title,
                    adminName: req.body.name,
                    adminId: req.body.id,
                    status: req.body.status,
                    isActive: false,
                    createdOn: time.now()
                })
                newGroup.save((err, newGroup) => {
                    if (err) {
                        logger.error('Failed To Create New Group', 'Group Controller:Create Group()', 10)
                        let apiResponse = response.generate(true, 'Failed to create  New Group', 500, null)
                        res.send(apiResponse)
                    } else {
                        delete newRoomObj._id;
                        delete newRoomObj.__v;
                        let apiResponse = response.generate(false, 'Created Group successfully', 200, newRoomObj)
                        res.send(apiResponse)
                    }
                })
            } else {
                logger.error('Group already Exists', 'Group Controller:Create Group()', 4)
                let apiResponse = response.generate(true, 'Group already Exists', 403, null)
                res.send(apiResponse)
            }
        })
}

// end Group  function 

// Get groups function--

let getGroups = (req, res) => {

    groupModel.find({ 'adminId': req.params.userId }, (err, groupDetails) => {
        if (err) {
            logger.error('Failed To Get Groups', 'Group Controller:Get Groups()', 10)
            let apiResponse = response.generate(true, 'Failed to Get Groups', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(groupDetails)) {
            logger.info('No Groups Found', 'Group Controller:Get Groups()', 4)
            let apiResponse = response.generate(false, 'No Groups Found', 404, null)
            res.send(apiResponse)

        } else {
            logger.info('Groups retrieved', 'Group Controller:Get Groups()', 4)
            delete groupDetails._id;
            delete groupDetails.__v;
            let apiResponse = response.generate(false, 'Groups retrieved', 200, groupDetails)
            res.send(apiResponse)
        }
    })
}
// End of Getgroups function

// Edit Group Function

let editGroup = (req, res) => {
    console.log('Inside edit group')
    let options = req.body
    console.log(options+'----');
    groupModel.update({ 'groupId': req.params.groupId }, options).exec((err, result) => {
        if (err) {
            logger.error('Failed to update group details', 'Group Controller:Edit Group()', 10)
            let apiResponse = response.generate(true, 'Failed to update group details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Group Found', 'Group Controller:Edit Group()', 10)
            let apiResponse = response.generate(false, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Group edited Successfully', 'Group Controller:Edit Group()', 4)
            let apiResponse = response.generate(false, 'Edit Successful', 200, result)
            res.send(apiResponse)
        }
    })
}

// End of Edit group function

// Get Single Function ---

let getSingleGroup = (req, res) => {
    groupModel.findOne({ 'groupId' :req.params.groupId }, (err, retrievedGroup) => {
        if (err) {
            logger.error('Failed to get group details', 'Group Controller:getSingleGroup()', 10)
            let apiResponse = response.generate(true, 'Failed to get group details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedGroup)) {
            logger.info('No Group Found', 'Group Controller:getSingleGroup()', 10)
            let apiResponse = response.generate(false, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            delete retrievedGroup._id;
            delete retrievedGroup.__v;
            logger.info('Group  Details Found', 'Group Controller:getSingleGroup()', 10)
            let apiResponse = response.generate(false, 'Group details Found Succesfully', 200, retrievedGroup)
            res.send(apiResponse)
        }
    })
}

// End of Get Single User Function---

// Get All Active Groups Function--

let getActiveGroups =(req,res) =>{
    console.log('userId---'+req.params.userId)
    groupModel.find({ $and: [ { adminId: { $ne: req.params.userId } }, { isActive: { $eq: true } } ] }, 
        (err, retrievedGroups) => {
        if (err) {
            logger.error('Failed to get groups', 'Group Controller:getActiveGroups()', 10)
            let apiResponse = response.generate(true, 'Failed to get groups', 500, err)
            res.send(apiResponse)
        } else if (check.isEmpty(retrievedGroups)) {
            logger.info('No Group Found', 'Group Controller:getActiveGroups()', 10)
            let apiResponse = response.generate(false, 'No Active Groups Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Groups Found', 'Group Controller:getActiveGroups()', 10)
            let apiResponse = response.generate(false, 'Groups Found Succesfully', 200, retrievedGroups)
            res.send(apiResponse)
        }
    })
}

// End of get Active Groups function

//  Delete Group Function --

let deleteGroup = (req, res) => {
    groupModel.remove({ 'groupId': req.params.groupId }, (err, result) => {
        if (err) {
            logger.error('Failed to Delete Group ', 'Group Controller:Delete Group()', 10)
            let apiResponse = response.generate(true, 'Failed to Delete Group', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Group Found', 'Group Controller:Delete Group()', 10)
            let apiResponse = response.generate(false, 'No Group Found', 404, null)
            res.send(apiResponse)
        } else {
            logger.info('Group Deleted', 'Group Controller:Delete Group()', 10)
            let apiResponse = response.generate(false, 'Group Deleted Succesfully', 200, result)
            res.send(apiResponse)
        }
    })
}

// End of Delete Group function

module.exports = {
    createGroup: createGroup,
    getGroups: getGroups,
    editGroup: editGroup,
    getSingleGroup:getSingleGroup,
    getActiveGroups : getActiveGroups,
    deleteGroup: deleteGroup
}