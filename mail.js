const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require('dotenv').config({path:"./.env"});


console.log(process.env.APIKEY)
const auth = {
    auth: {
        api_key: process.env.APIKEY,
        
        domain: process.env.DOMAIN
    }

};

console.log(auth)

const transporter = nodemailer.createTransport(mailGun(auth));

console.log(transporter)

const sendMail = (email, subject, text, cb) =>{
    console.log("hello")
    const mailOptions = {
        from: email, 
        to: "ana.valdivia112@gmail.com",
        subject: subject, 
        text: text
    }; 
    
    transporter.sendMail(mailOptions, (err, data)=> {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });

}

module.exports = sendMail;

