import express from 'express'
import { Router } from 'express'
import {User} from '../model/user'
const router = Router()
const user = User
//creating a new user 
// router.post('/',async (req,res)=>{
//     const(firstName,lastName,email,password  )
// })   