export const environment = {
  production: true,
  nodemailer: {
    mail: '',
    pass: '',
    transport: {
        service: 'gmail',
        auth: {
          user: 'tucorreo@gmail.com',
          pass: 'tucontraseña'
        }
    }
  }
};
