// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   
  let nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'winteragency01@gmail.com',
    pass: process.env.pass,
  },
  secure: true,
})
      const mailData = {
        from: `${req.body.sender}`,
        to: 'winteragency01@gmail.com',
        subject: `Message From ${req.body.sender} (${req.body.mail})`,
        text: `${req.body.message}`,
        html: `<div style="width:100%;">
        <div style="margin:0 auto;padding:1rem;border-radius:1rem; box-shadow:0px 0px 10px 0px black;color:blue">
          <div><strong>Sender:</strong> ${req.body.sender}</div>
          <div><strong>Mail:</strong> ${req.body.mail}</div>
          <div><strong>Number:</strong> ${req.body.number}</div>
        </div>
        <div style="margin-top:2rem">${req.body.message}</div>
      </div>`,
       }
       transporter.sendMail(mailData,function (err:any,info:any){
        if(err)
        res.status(400).send(err)
      else
        res.status(200).send(info)
       })
  
}
