import nodemailer from "nodemailer";

const sendEmail = async(to,subject,html)=>{
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: process.env.ETHEREAL_USER, // generated ethereal user
          pass: process.env.ETHEREAL_pass, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: `"Wesam co. 👻" <${process.env.ETHEREAL_USER}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
      });

}
//sendEmail().catch(console.error);
export default sendEmail