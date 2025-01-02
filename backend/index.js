import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoute from './routes/auth.js'
// import protectedRoute from './routes/protected.js'



dotenv.config();
const app = express();
connectDB();

app.use(express.json())

app.use('/',authRoute)
// app.use('/protected',protectedRoute)


app.get('/helo',(req,res)=>{
    res.send("helooo")
})


const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})