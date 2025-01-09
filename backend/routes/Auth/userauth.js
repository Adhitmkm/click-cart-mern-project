import { Router } from 'express';
import { login, signup,  } from '../../controller/auth/userauth.js';

const userauthRoute = Router()


userauthRoute.post('/signup',signup)

userauthRoute.post('/login',login)

export default userauthRoute;