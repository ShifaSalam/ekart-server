require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Connection/db')
const router=require('./Routes/router')

const ekart=express()
ekart.use(cors())
ekart.use(express.json())
ekart.use(router)

const PORT=3000 || process.env.PORT

ekart.listen(PORT,()=>{
    console.log(`EKart server is running at:${PORT}`)
})

ekart.get('/',(req,res)=>{
    res.send("<h1>EKart Server is Active!!.Waiting for User Requests!!!</h1>")
})