import messageModel from "../../../../DB/Model/message.model.js"
import userModel from "../../../../DB/Model/user.model.js"

export const getMessages =async (req,res)=>{
    const{ id } = req
    
    const allMessages = await messageModel.find({receiverId:id}).select(['message'])
    return res.status(200).json(allMessages)
}

export const sendMessage = async(req,res)=>{

    const{receiverId} = req.params
    const{message} = req.body
    const user = await userModel.findById(receiverId)
    if(!user){return res.status(404).json({message:"erorr.. this isnt user"})}
    const addMessage = await messageModel.create({message,receiverId})
    return res.status(200).json({message:"success"})
}

export const deleteMessage = async (req,res)=>{
    const{messageId} = req.params;
    const {id} = req

    const delMessage = await messageModel.deleteOne({_id:messageId,receiverId:id})
    if(!delMessage.deletedCount){return res.json({message:"this message already delete"})}
    return res.json({message:"succsess"})
}