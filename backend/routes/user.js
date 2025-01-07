import {Router} from "express"
import { userprofile } from "../controller/user.js";
import  authMiddleware  from "../middleware/authMiddleware.js";

const userRouter = Router()

userRouter.get('/profile',authMiddleware,userprofile)

userRouter.delete('/delete',authMiddleware,)



export default userRouter;