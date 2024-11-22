const { default: mongoose } = require("mongoose")

const userSchema= new mongoose.Schema({
    name:{type:"string", required:true},
    completed:{type:Boolean, required:false},
    date:{type:Date , required:Date.now()}
})
module.exports= mongoose.model('Users',userSchema)