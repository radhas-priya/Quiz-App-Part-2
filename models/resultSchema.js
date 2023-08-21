const mongoose = require("mongoose");
const {Schema} = mongoose;

// result model
const resultModel = new Schema({
    username:{type:String},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
    achieved:{type:String,default:''},
    createdAt:{type:Date,default:Date.now}
    
})

module.exports =mongoose.model('result',resultModel)