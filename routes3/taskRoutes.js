const express=require("express")
const { createTask , displayTask , displayTaskAll, updateTask ,deleteTask }=require('../controllers2/taskController')
const router=express.Router()

//nféfini f router method mta http post
router.post('/',createTask)
router.get('/:id',displayTask)
router.get('/',displayTaskAll)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports=router