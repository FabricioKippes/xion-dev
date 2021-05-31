if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/', (req, res) => {
  const htmlEmail = `
    <h3>Remitente</h3>
    <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.message}</p>
    `

  const transporter = nodemailer.createTransport({
    address: process.env.MAIL_HOST,
    host: process.env.MAIL_HOST,
    port: 2525,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'consultas@xiondev.com',
    replyTo: req.body.email,
    subject: 'Nueva Consulta',
    text: req.body.message,
    html: htmlEmail
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err)
    }
    console.log('Message sent: %s', info)
  })

  res.send('Mail enviado')
})

module.exports = router

