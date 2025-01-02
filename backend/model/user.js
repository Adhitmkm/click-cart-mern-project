import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lasttName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})

// module.exports = mongoose.model('User',UserSchema)
const User = mongoose.model("User",UserSchema);
export default User;