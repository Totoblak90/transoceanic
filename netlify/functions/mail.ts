import { Handler, HandlerEvent } from '@netlify/functions';
import { createTransport } from 'nodemailer';
const {ADMIN_MAIL, ADMIN_PASS} = process.env

const transporter = createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: ADMIN_MAIL,
    pass: ADMIN_PASS
  }
});


const handler: Handler = async (event: HandlerEvent, context: any) => {
  try {

    console.log({
      adminMail: ADMIN_MAIL,
      adminPass: ADMIN_PASS
    })

    console.log('transporter', transporter)

    const data =JSON.parse(event.body || '')

    console.log('data',data)

    if (data === '') {
      throw new Error('La data no fue proveída correctamente.')
    }

    const mailOptions = {
      from: ADMIN_MAIL,
      to: data.email,
      subject: data.subject,
      text: `
        El número de teléfono es: ${data.phone}
        Mensaje:
        ${data.message}
      `
    };

    console.log('mailOptions',mailOptions)

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw new Error(error.message)
      } else {
        console.log(info.response)
      }
    });

    return {
      statusCode: 200,
      body: 'MAIL SENT'
    }
  } catch (error: any) {
    return {
      statusCode: 200,
      body: error.message
    }
  }

}

export {handler}
