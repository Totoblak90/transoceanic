export const environment = {
  production: false,
  nodemailer: {
    mail: 'tobias.blaksley@hotmail.com',
    pass: 'Vildom.90',
    transport: {
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'tobias.blaksley@hotmail.com',
        pass: 'Vildom.90'
      }
    }
  }
};
