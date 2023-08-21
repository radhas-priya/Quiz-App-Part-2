const mongoose = require("mongoose");
const {Schema} = mongoose;

// question model
const questionModel = new Schema({
    questions:{type:Array,default:[]},
    answers:{type:Array,default:[]},
    createdAt:{type:Date,default:Date.now}
})

module.exports =mongoose.model('Question',questionModel)