import { login, logout, signup } from '../controller/user.js';
import auth from '../middleware/auth.js';

import { Router } from 'express';
const router=Router()

router.post('/signup',signup)

router.post('/login',login)

router.post('/logout',logout)

export default router;