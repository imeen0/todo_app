const task=require('../models1/user')

const createTask= async (req,res)=>{
    try{
        const Task=await task.create({
            name:req.body.name,
            completed:req.bodycompleted,
            date:req.body.date
        })
        res.status(200).json({
            message:"task created successfully",
            task:task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}
const displayTask= async(req,res)=>{
    try{
        console.log(req.params.id)  
        const task=await  task.findById(req.params.id) 
        if(!task){
            return res.status(400).json({
                message:` maaanech menou l id ${req.params.id}`
            })
        }
        res.status(200).json({
            message:`shyh ahwa task eli andou id${req.params.id}`,
            task
        })
    }
    catch(err){
        res.status(400).json(err)
    }  
}
const displayTaskAll=async(req,res)=>{
    try{
        const task= await task.find()
        res.status(200).json({
            message:"here all the tasks",
            task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}
const updateTask=async(req,res)=>{
    try{
        //task???
        task=await task.findByIdAndUpdate(req.params.id ,{
            name:req.body.name,
            completed:req.bodycompleted,
            date:req.body.date},
            {new:true}
        )
        res.status(200).json({
            message:`oumourek mrigla user eli andou id ${req.params.id}`,
            task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}
const deleteTask=async(req,res)=>{
    try{
        const task=await task.findAndDelete(req.params.id) 
        if(! task){
            res.status(400).json({
                message:`${req.params.id} not founded!!`
            })
        }
        res.status(200).json({
            message:` ${req.params.id} deleted successfully!`
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}








module.exports={ createTask ,displayTask, displayTaskAll ,updateTask , deleteTask}   
