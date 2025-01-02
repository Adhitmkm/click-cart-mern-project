import { registeration } from '../controller/user.js';
import auth from '../middleware/auth.js';

import { Router } from 'express';
const router=Router()

router.post('/signup',auth,registeration)

export default router;