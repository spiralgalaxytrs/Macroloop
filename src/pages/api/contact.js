// export default function (req, res) {
//     require('dotenv').config()
    
//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: 'mailtrscbe@gmail.com',
//         pass: "jkdkseaqrzsgduao",
//       },
//       secure: true,
//     })
//     const mailData = {
//       from: 'mailtrscbe@gmail.com',
//       // to: 'info@looptech.in',
//       to: 'vishaal.j.trs@gmail.com',
//       subject: `Message From ${req.body.name}`,
//     //   text: req.body.msg + " | Sent from: " + req.body.mail,
//       html: `<h1>MacroLoop Technologies  Enquiry</h1> 
//       Name:${req.body.name}<br>
//       Email:${req.body.mail}<br>
//       Mobile:${req.body.phone}<br>
//       ORG:${req.body.org}<br>
//       REQUIREMENT:${req.body.re}<br>
//       AGENDA:${req.body.agen}<br>
//       Message:${req.body.msg}`
//     }
//     transporter.sendMail(mailData, function (err, info) {
//       if(err)
//         console.log(err)
//       else{
//       res.redirect("/contact#200");
//         console.log("Email sent: " + info.response)
//         }
//     })
//     res.status(200)
//   }

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  require('dotenv').config();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { name, mail, phone, org, re, agen, msg } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_USER, // Use environment variable
    to: 'vishaal.j.trs@gmail.com', // You can dynamically set this if needed
    subject: `Message From ${name}`,
    html: `
      <h1>MacroLoop Technologies Enquiry</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${mail}</p>
      <p><strong>Mobile:</strong> ${phone}</p>
      <p><strong>ORG:</strong> ${org}</p>
      <p><strong>REQUIREMENT:</strong> ${re}</p>
      <p><strong>AGENDA:</strong> ${agen}</p>
      <p><strong>Message:</strong> ${msg}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailData);
    console.log('Email sent: ' + info.response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ message: 'Error sending email', error: err.message });
  }
}
