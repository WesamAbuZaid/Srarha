const validation = (schema)=>{
    return (req,res,next)=>{
        const requstMethods =['body',"query","params","headers"]
        const errorsOccur =[];

        requstMethods.forEach(ele=>{
            if(schema[ele]){
                const resultValidation = schema[ele].validate(req[ele],{abortEarly:false})
                if(resultValidation.error){
                errorsOccur.push(resultValidation.error.details)
                }
            }
            
        })
        if(errorsOccur.length>0)
        {
            return res.json(errorsOccur)
        }else{next()}



    }

}
export default validation