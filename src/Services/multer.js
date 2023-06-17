import multer  from 'multer';

export const HME = (err,req,res,next)=>{
    if(err){return res.json({message:"error",error:err})}
    else{next()}
}

 const uploadFile =()=>{
    const storage = multer.diskStorage({})
      const upload = multer({fileFilter,storage})
      return upload
}

function fileFilter (req, file, cb) {

  if(!["image/png","image/jpg"].includes(file.mimetype))
    {cb("invalid image", false)}
  else{cb(null, true)}
    
  }

export default uploadFile