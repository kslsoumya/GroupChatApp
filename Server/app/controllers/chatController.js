

const mongoose = require('mongoose')
const check = require('../libs/checkLib')

const chatModel = mongoose.model('Chat')
const logger = require('../libs/loggerLib')
const response = require('../libs/responseLib')


// Get group Chat----

let getGroupChat =(req,res) =>{
    let validateParams =()=>{
        return new Promise((resolve,reject)=>{
            if(check.isEmpty(req.params.id)) {
                logger.info('parameters missing','getGroupChat handler',9)
                let apiResponse = response.generate(true,'parameters mising',403,null)
                reject(apiResponse)
            } else {
                resolve()
            }
        })
    }
    let findChats=() =>{
        return new Promise ((resolve,reject)=>{
            console.log(req.params.id+'-------');
            chatModel.find({'groupId': req.params.id})
            .select('-_id -__v')
            .sort('-createdOn')
            .skip(parseInt(req.params.skip)|| 0 )
            .lean()
            .limit(10)
            .exec((err,result)=>{
                if(err) {
                    console.log(err)
                    logger.error(err.message,'chat Controller : find group chat',10)
                    let apiResponse = response.generate(true,`error occured: ${err.message}`,500 ,null)
                    reject(apiResponse)
                } else if(check.isEmpty(result)) {
                    logger.info('No Chat found', 'Chat Controller : find group chat')
                    let apiResponse = response.generate(true,'No chat Found',404,null)
                    reject(apiResponse)
                } else {
                    console.log('chat found and listed')
                    let reverseResult = result.reverse()
                    console.log(result+'------------')
                    resolve(result)
                }
            })
        })
    }
    validateParams()
    .then(findChats)
    .then((result)=>{
        let apiResponse = response.generate(false,'All Group chats Listed',200,result)
        res.send(apiResponse)
    })
    .catch((error)=>{
        res.send(error)
    })
}


module.exports =  {
    getGroupChat : getGroupChat,
}


