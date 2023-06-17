import bcrypt  from 'bcryptjs';

export const Hash = (plainText,saltNumber = parseInt(process.env.SALT_NUM))=>{

    var hashValue = bcrypt.hashSync(plainText,saltNumber);
    return hashValue
}

export const Comparee = (value,hashValue)=>{
    const match = bcrypt.compareSync(value,hashValue);
    return match;
}