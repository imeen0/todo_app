//namportiw eli nesthakou
const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const connection=require("./config/dbConnection")
const taskRoutes= require("./routes3/taskRoutes")
//ymakana mn ena nakraw mn .env des valeurs
dotenv.config()
//initialisation d'express application
const app=express()
//appel ll connection mta db
connection()

app.use(express.json())
const port =process.env.PORT
console.log("hi!")
app.listen(port, () => console.log(`server runnig on:${port}`))
 app.use("/tasks",taskRoutes)


