import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/auth.js';



dotenv.config();
const app = express();
connectDB();


app.use('/',router)

app.get('/helo',(req,res)=>{
    res.send("helooo")
})


const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})