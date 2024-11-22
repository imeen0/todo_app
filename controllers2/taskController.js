const task=require('../models1/task')

const createTask= async (req,res)=>{
    console.log(req.body)
    try{
        const Task=await task.create({
            name:req.body.name,
            completed:req.body.completed,
            date:req.body.date
        })
        console.log(1)
        res.status(200).json({
            message:"task created successfully",
            task:Task
        })

    }
    catch(err){
        res.status(400).json(err)
    }
}
const displayTask= async(req,res)=>{
    try{
        console.log(req.params.id)  
        const Task=await  task.findById(req.params.id) 
        if(!Task){
            return res.status(400).json({
                message:` maaanech menou l id ${req.params.id}`,
                task:Task
            })
        }
        res.status(200).json({
            message:`shyh ahwa task eli andou id${req.params.id}`,
            task:Task
        })
    }
    catch(err){
        res.status(400).json(err)
    }  
}
const displayTaskAll=async(req,res)=>{
    try{
        const Task= await task.find()
        res.status(200).json({
            message:"here all the tasks",
            task:Task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}
const updateTask=async(req,res)=>{
    try{
        //task???
        const Task=await task.findByIdAndUpdate(req.params.id ,{
            name:req.body.name,
            completed:req.bodycompleted,
            date:req.body.date},
            {new:true}
        )
        res.status(200).json({
            message:`oumourek mrigla user eli andou id ${req.params.id}`,
            task:Task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}
const deleteTask=async(req,res)=>{
    try{
        console.log(req.params.id)  
        const Task=await task.findByIdAndDelete(req.params.id) 
        
        if(!Task){
            return res.status(400).json({
                message:`${req.params.id} not founded!!`,
                task:Task
            })
        }
        res.status(200).json({
            message:` ${req.params.id} deleted successfully!`,
            task:Task
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}








module.exports={ createTask ,displayTask, displayTaskAll ,updateTask , deleteTask}   
