const nodemailer = require('nodemailer');

// email config
const transporter = nodemailer.createTransport({
    host: '127.0.0.1',
    port: '1025',
    secure: false,
    tls: {
        ciphers: 'SSLv3'
    }
  });

const mailOptions = {
    from: 'nori@gmail.com',
    to: 'toto@toto.com',
    subject: 'Confirmation de votre adresse email',
    text: 'Cliquer sur le lien'
  };

module.export = (email) => {
    mailOptions.to = email;
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  