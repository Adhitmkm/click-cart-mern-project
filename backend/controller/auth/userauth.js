import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../model/user.js';

// import session from 'express-session';

export const signup = async (req,res)=>{

  try{
     const{firstName, lastName, email, password  } = req.body; 
     
     // if(req.body.firstName==undefined || req.body.lastName || req.body.email ||req.body.password ){
     //     res.status(500).send({error:"authentication failed"})
     // }

     let user = await User.findOne({email});
     if(user){
         console.log("user alredy exist")
         return res.status(400).json({err:"user alredy exist"})
     }
     user = new User({
         firstName,
         lastName,
         email,
         password
     })

     const salt = await bcrypt.genSalt(10)
     user.password = await bcrypt.hash(password,salt);

     await user.save()

     const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
     });

console.log(accessToken ,' access')

const refreshToken = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,
 {expiresIn:process.env.REFRESH_TOKEN_EXPIRES})
 
 console.log(refreshToken ,' refreshToken')


         user.refreshToken = refreshToken;
         await user.save();
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
     let user = await User.findOne({email});
     if(!user){
         console.log("user not exist")
         return res.status(400).json({err:"user not exist"})
     }

     const verify = await bcrypt.compare(password,user.password)
     if(!verify){
         console.log("incorrect password");
         
         return res.status(400).json({err:"incorrect password"})
     }

     const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
         expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
     });

     const refreshToken = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,
         {expiresIn:process.env.REFRESH_TOKEN_EXPIRES})

         user.refreshToken = refreshToken;
         await user.save();
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

// export const logout = async(req,res )=>{

//  let REFRESH_TOKEN,ACCESS_TOKEN;
//  try{
//      if(!REFRESH_TOKEN,ACCESS_TOKEN){
//          return res.status(400).json({err:"user not exist"})
//      }
//      const accessToken = jwt.sign("");
//      user.refreshToken = " ";
//      await user.save();

//      return res.status(201).json({msg:"User sucessfully logoined",accessToken})



//  }catch{
//      console.log(err.message );
//      res.status(500).json({err:err.message})
//  }
 
// }


 