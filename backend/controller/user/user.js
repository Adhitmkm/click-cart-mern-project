import User from "../../model/user.js"


export const userprofile = async(req,res) => {
   console.log('hi')
       try {
           console.log(req.userId,"heeee")
           const user = await User.findById(req.userId)
           if(!user){

           }
           console.log(user,"useeeer")
           
           return(res.status(200).json({user,message:"profile succesfully"}))
       } catch (error) {
           console.log("erorrr")
       }

   }


   export const deleteuser = async(req,res)=>{
    try {
        const id = req.query.id
        console.log(id,'id')
        if(!id){
            return (  console.log("user not found"),res.status(500).json({err:err.message}))
        }
        const user = await User.findByIdAndDelete(id)
        return res.json({msg:'delete success',data:true})
    } catch (error) {
        console.log("user not exist")
    }
}


export const updateuser = async(req,res)=>{
    try {

        console.log(req.body,"trueeeeeeeee111")
        const{firstName, lastName, email } = req.body; 

        if(!firstName || !lastName || !email) {
            return(console.log("user not found"),res.status(500).json({err:err.message}))
        }

        console.log('noooooooooo')

        // const user = User.updateMany(firstName,lastName,email);
        
        const user = await User.updateMany(
            {
              $set: {
                firstName: firstName,
                lastName: lastName,
                email:email,
              },
            }
          );

        console.log(user,"saveed")
          if(user.modifiedCount > 0) {
            res.status(500).json({msg:"details succesfully updated"})
          } else {
            res.status(404).json({msg:"user data no udated"})
          }


    } catch (error) {
         res.status(500).json({ message: "Error updating user details", error: error.message });
    }   
}

