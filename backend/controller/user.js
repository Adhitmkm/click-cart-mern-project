import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../model/user.js'




 export const registeration =async (req,res)=>{
    const{firstName, lasttName, email, password  } = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({err:"user alredy exist"})
        }
        use = new User({
            firstName,
            lasttName,
            email,
            password
        })

        // hashinh password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt);

        await user.save()

        return res.status(201).json({msg:"User sucessfully registered"})

    }catch(err){
        console.log(err.message );
        res.status(500).json.json({err:err.message})
    }
};



