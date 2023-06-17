import Joi from "joi"

 export const  registerSchema ={
 body: Joi.object({
        uname:Joi.string().alphanum().min(3).max(30).required().messages({
            "string.empty":'please inter your name'
        }),
        email:Joi.string().email({ maxDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        cPassword:Joi.string().valid(Joi.ref("password")).required().messages({
            "any.required":'confirm password is reqiured',
            "any.only":'confirm password is wrong'

        })

    }).required()
}

export const logInSchema ={
    body: Joi.object({
        email:Joi.string().email({ maxDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
    }).required()
}