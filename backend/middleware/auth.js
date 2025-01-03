import  JsonWebTokenError  from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

export default function(req,res,next){
    const authHeader = req.header('Authorization');
    if(!authHeader){
        return res
        .status(401)
        .json({error:"no token fount , authorization failed"})
    }

    const token = authHeader.split(' ')[1];
    if(!token){
        return res
        .status(401)
        .json({error:"no token fount , authorization failed"})

    }

    try{
        const decoded = JsonWebTokenError.verify(token,process.env.JWT_SECRET);
        req.user =decoded.user;
        next()
    }catch(error){
        return res.status(401).json({error:"token is invalid"})
    }
}

