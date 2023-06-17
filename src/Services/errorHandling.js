export const asyncHandler = (fun)=>{
    return (req,res)=>{
        fun(req,res).catch(err=>{return res.status(500).json({message:"error",ErrorIs:err})})
    }
}