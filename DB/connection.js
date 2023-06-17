import mongoose from'mongoose';

const connectDB = async()=>{

  return await mongoose.connect(process.env.LOCAL_DB)
  .then(() => console.log('Connected!'))
  .catch(err =>console.log(`error :${err}`));

}
export default connectDB