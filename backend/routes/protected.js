import auth from '../middleware/auth.js'
import { Router } from 'express'
const router = Router();

router.get('/',auth,(req,res)=>{
    res.json({msg:'This is protected route',user:req.user});
})

export default router;  