import {Router} from "express"
// import { deleteuser, updateuser, userprofile } from "../controller/user.js";
import authMiddleware from "../../middleware/authMiddleware.js";
import { deleteuser, updateuser, userprofile } from "../../controller/user/user.js";


const userRouter = Router()

userRouter.get('/profile',authMiddleware,userprofile)

userRouter.put('/update',authMiddleware,updateuser)

userRouter.delete('/delete',authMiddleware,deleteuser)



export default userRouter;