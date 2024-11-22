const express=require("express")
const { createTask }=require('../controllers2/taskController')
const { displayTask }=require('../controllers2/taskController')
const { displayTaskAll }=require('../controllers2/taskController')
const {updateTask}=require('../controllers2/taskController')
const {deleteTask}=require('../controllers2/taskController')
const router=express.Router()

//nféfini f router method mta http post
//tasksss?????
router.post('tasks',createTask)
router.get('tasks',displayTask)
router.get('tasks',displayTaskAll)
router.put('tasks',updateTask)
router.delete('tasks',deleteTask)

module.exports=router