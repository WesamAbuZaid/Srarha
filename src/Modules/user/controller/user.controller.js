import userModel from "../../../../DB/Model/user.model.js"
import cloudinary from "../../../Services/cloudinary.js"

export const profilePic =async (req,res)=>{
    const {secure_url} = await cloudinary.uploader.upload(req.file.path,{folder:`user/${req.id}`})
    const userPic = await userModel.updateOne({"_id":req.id},{profilePic:secure_url})
    res.status(200).json({message:"success"})
}