// import Admin from "../../model/admin";
import User from "../../model/user.js"



export const userDetails = async (req,res)=>{
    console.log("detailss")

    try {
        const user = await User.find()
        console.log(user,"useeeeer")
        return(res.status(200).json({user,message:"users detals"}))
    } catch (error) {
        console.log(error,"error")
    }
}

export const deleteusers = async(req,res)=>{
    console.log("entered")
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