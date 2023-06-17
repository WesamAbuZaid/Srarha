import jwt from 'jsonwebtoken';

export const createToken = (paylod , signature = process.env.SIGNATURE, expiresIn = '1h') =>{

    const token = jwt.sign(paylod,signature,{expiresIn});
    return token;

}

export const verifyToken = (token,signature = process.env.SIGNATURE)=>{

    const decoded = jwt.verify(token,signature);
    return decoded ;
}