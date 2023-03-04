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

    const data =JSON.parse(event.body || '')

    if (data === '' || !data.email || !data.subject || !data.phone || !data.message || !data.name) {
      throw new Error('La data no fue proveída correctamente.' + JSON.stringify(data))
    }

    const mailOptions = {
      from: ADMIN_MAIL,
      to: data.email,
      subject: data.subject,
      text: `<p>Nombre del contacto: ${data.name} El número de teléfono es: ${data.phone}<br/>Mensaje:${data.message}</p>`
    };

    console.log('mailOptions',mailOptions)

    const promise = new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('error en mail',error)
          reject(error.message)
        } else {
          resolve(info.response)
        }
      });

    })

    await promise;
    console.log(promise)

    return {
      statusCode: 200,
      body: 'MAIL SENT'
    }
  } catch (error: any) {
    console.log('error',error)
    return {
      statusCode: 200,
      body: error.message
    }
  }

}

export {handler}
