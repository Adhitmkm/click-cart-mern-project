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
        type:email,
        required:true
    },
    password:{
        type:password,
        required:true
    }
})

module.exports = mongoose.model('User',UserSchema)