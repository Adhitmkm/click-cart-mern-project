import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is connected")
})
.catch((err)=>{
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send("helooo")
})


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})