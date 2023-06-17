import userModel from "../../../../DB/Model/user.model.js";
import { Comparee, Hash } from "../../../Services/HashAndCompare.js";
import { createToken, verifyToken } from "../../../Services/SignAndVerifyToken.js";
import sendEmail from "../../../Services/sendEmail.js";


export const register = async (req,res)=>{
    const {uname,email,password,cPassword} = req.body;
    const user = await userModel.findOne({email})
    if(user){return res.status(409).json("user already exist")}
    else{
        const hashPassword = Hash(password)
        const token = createToken({email},process.env.EMAIL_TOKEN)
        const link =`https://saraha-bmai.onrender.com/auth/confirmemail/${token}`
       await sendEmail(email,`please ${uname} verify your email`,`<a href ='${link}' target='_blank'>confirm your email</a>`)
        const createUser = await userModel.create({uname,email,password:hashPassword})
        return res.status(201).json({message:"success",user:createUser})
    }
}
export const confirmEmail = async(req,res)=>{
    const {token}=req.params
    const decoded = verifyToken(token,process.env.EMAIL_TOKEN)
    const user =await userModel.updateOne({email:decoded.email},{confirmEmail:true})
    return res.redirect("https://www.facebook.com/")
}

export const logIn = async (req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){return res.status(400).json("password or email is wrong")}
    if(!user.confirmEmail){return res.status(400).json("please confirm your email")}
    else{
        const match = Comparee(password,user.password)
        
        if(!match){return res.status(400).json("password or email is wrong")}
        else{
           const token = createToken({id:user._id})
            res.status(200).json({message:"success",token})
        }
    }


}
