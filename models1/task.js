const { default: mongoose } = require("mongoose")

const taskSchema= new mongoose.Schema({
    name:{type:"string", required:true},
    completed:{type:Boolean, required:false , default:false},
    date:{type:Date , default:Date.now() ,required:false}
})
module.exports= mongoose.model('tasks',taskSchema)