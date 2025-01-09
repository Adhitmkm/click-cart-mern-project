import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import userauthRoute from './routes/Auth/userauth.js'
import adminauthRoute from './routes/Auth/adminauth.js'
import userRouter from './routes/User/user.js'
import adminRouter from './routes/admin/admin.js'
// import superadminauthRoute from './routes/Auth/superadminauth.js'


dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true

}))
app.use(express.json())

// user
app.use('/auth',userauthRoute)
app.use('/user',userRouter)

// admin
app.use('/auth',adminauthRoute)
app.use('/admin',adminRouter)

// superadmin
// app.use('/auth',superadminauthRoute)

//admin route
app.use('/admin',adminauthRoute)


const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log(`i am reAdy at port ${PORT}`)
})