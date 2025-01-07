import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoute from './routes/auth.js'
import protectedRoute from './routes/protected.js'
import cors from 'cors'
import auth from './middleware/authMiddleware.js'
import userRouter from './routes/user.js'


dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PATCH","DELETE"],
    credentials: true

}))
app.use(express.json())

app.use('/auth',authRoute)
app.use('/protected',protectedRoute)

// user auth
app.use('/user',userRouter)



const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})