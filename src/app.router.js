import authRouter from "./Modules/auth/auth.router.js"
import userRouter from "./Modules/user/user.router.js"
import messageRouter from "./Modules/message/message.router.js"
import connectDB from "../DB/connection.js"
const initApp = (app,express)=>{
    const port = 3000
    app.use(express.json())
    connectDB().then(()=>{app.listen(process.env.PORT||port,() => console.log(`Sraha app listening on port ${port}!`))})
    app.get('/',(req, res) => res.send('Hello in sraha !'))
    app.use("/auth",authRouter)
    app.use("/user",userRouter)
    app.use("/message",messageRouter)

    app.use("*",(req,res)=>{return res.json("Page Not Found!!!")})
    
}
export default initApp;
