import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Admin from '../../model/admin.js';
// import session from 'express-session';

export const signup = async (req,res)=>{

  try{
     const{firstName, lastName, email, password  } = req.body; 
     
     // if(req.body.firstName==undefined || req.body.lastName || req.body.email ||req.body.password ){
     //     res.status(500).send({error:"authentication failed"})
     // }

     let admin = await Admin.findOne({email});
     if(admin){
         console.log("user alredy exist")
         return res.status(400).json({err:"user alredy exist"})
     }
     admin = new Admin({
         firstName,
         lastName,
         email,
         password
     })

     const salt = await bcrypt.genSalt(10)
     admin.password = await bcrypt.hash(password,salt);

     await admin.save()

     const accessToken = jwt.sign({ id: admin._id, admin: admin.email }, process.env.JWT_SECRET, {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
     });

console.log(accessToken ,' access')

const refreshToken = jwt.sign({id:admin._id,email:admin.email},process.env.JWT_SECRET,
 {expiresIn:process.env.REFRESH_TOKEN_EXPIRES})
 
 console.log(refreshToken ,' refreshToken')


         admin.refreshToken = refreshToken;
         await admin.save();
         console.log("user successfully registered")

     

     return res.status(201).json({msg:"User sucessfully registered",accessToken})

 }catch(err){
     console.log(err.message );
         res.status(500).json({err:err.message})
 }
};

export const login =async (req,res)=>{
 const { email,password } = req.body;
 try{
     let admin = await Admin.findOne({email});
     if(!admin){
         console.log("user not exist")
         return res.status(400).json({err:"user not exist"})
     }

     const verify = await bcrypt.compare(password,admin.password)
     if(!verify){
         console.log("incorrect password");
         
         return res.status(400).json({err:"incorrect password"})
     }

     const accessToken = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
     });

     const refreshToken = jwt.sign({id:admin._id,email:admin.email},process.env.JWT_SECRET,
         {expiresIn:process.env.REFRESH_TOKEN_EXPIRES})

         user.refreshToken = refreshToken;
         await admin.save();
         console.log("User sucessfully logoined");
         
         return res.status(201).json({msg:"User sucessfully logoined",accessToken})


     // const payload = {
     //     user:{
     //         id: user.id,
     //     },
     // };

     // jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:3600}),(err,token)=>{
     //     if(err)throw err;
     //     res.json({token})
     // }
 }catch{
     console.log(err.message );
     res.status(500).json({err:err.message})
 }
}
