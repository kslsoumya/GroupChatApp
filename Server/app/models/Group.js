
const mongoose =require('mongoose')

const Schema = mongoose.Schema

let groupSchema = new Schema ({
    groupId: {type: String,unique : true, required : true},
    groupName : {type:String,default:''},
    adminName: { type:String, default:'' },
    adminId : {type:String,default :''},
    isActive:{type:Boolean,default:false},
    isMember:{type:Boolean,default:false},
    messageList :[],
    status :{type:String, default:'Available'},
    createdOn : {type:Date,default:Date.now},
    modifiedOn : {type: Date, default:Date.now}

})
mongoose.model('Group',groupSchema)