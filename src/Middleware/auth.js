import userModel from "../../DB/Model/user.model.js";
import { verifyToken } from "../Services/SignAndVerifyToken.js";

 const auth = async(req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){return res.status(401).json("in valid authorization")}
    if(!authorization.startsWith(process.env.BEARER_TOKEN))
    {return res.status(400).json("in valid bearer token")}
    
    const token = authorization.split(process.env.BEARER_TOKEN)[1]
    if(!token){ return res.status(400).json({message:"there is no token"})}
    const decoded = verifyToken(token)

    const authUser = await userModel.findById(decoded.id)
    if(!authUser){return res.status(404).json({message :"user not register"})}
    req.id =decoded.id

    next();

}
export default auth