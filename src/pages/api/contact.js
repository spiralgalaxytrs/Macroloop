export default async function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'mailtrscbe@gmail.com',
        pass: "jkdkseaqrzsgduao",
      },
      secure: true,
    })
    const mailData = {
      from: 'mailtrscbe@gmail.com',
      // to: 'info@looptech.in',
      to: 'info@looptech.in',
      subject: `Message From ${req.body.name}`,
    //   text: req.body.msg + " | Sent from: " + req.body.mail,
      html: `<h1>MacroLoop Technologies  Enquiry</h1> 
      Name: ${req.body.name ?? ''}<br>
      Email: ${req.body.mail ?? ''}<br>
      Mobile: ${req.body.phone ?? ''}<br>
      Organisation: ${req.body.org ?? ''}<br>
      ${req.body.re!='-' ? `Requirement: ${req.body.re}<br>` : ''}
      Agenda: ${req.body.agen ?? ''}<br>
      Message: ${req.body.msg ?? ''}`
    }
    // transporter.sendMail(mailData, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else{
    //   res.redirect("/contact#200");
    //     console.log("Email sent: " + info.response)
    //     }
    // })
    // res.status(200)
    try {
      const info = await transporter.sendMail(mailData);
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
      console.error('Error sending email:', err);
      return res.status(500).json({ message: 'Error sending email', error: err.message });
    }
  }
