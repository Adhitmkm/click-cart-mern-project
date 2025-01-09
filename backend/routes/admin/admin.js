import { Router } from "express";
import { deleteusers, userDetails } from "../../controller/admin/admin.js";

const adminRouter = Router()

adminRouter.get('/users',userDetails)
adminRouter.delete('/deleteusers',deleteusers)

export default adminRouter;