
import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  uname :{
    type:String,
    required:true
  },
  email :{
    type:String,
    required:true
  },
  password :{
    type:String,
    required:true
  },
  confirmEmail :{
    type:Boolean,
    default:false
  },
  profilePic :{
    type:String,
  }

},
{ timestamps:true });

const userModel = mongoose.models.User || model('User', userSchema)
export default userModel;