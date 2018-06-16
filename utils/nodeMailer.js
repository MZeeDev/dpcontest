'use strict';
const nodemailer = require('nodemailer');
const config = require('./../config');
module.exports = {
    sendMail: async (to, subject, html) => {
        nodemailer.createTestAccount(async (err, account) => {
            let transporter = nodemailer.createTransport({
                host: config.MAIL_HOST,
                port: config.MAIL_PORT,
                secure: config.MAIL_ENCRYPTION,
                tls: {
                    rejectUnauthorized: config.MAIL_ENCRYPTION
                },
                auth: {
                    user: config.MAIL_USERNAME,
                    pass: config.MAIL_PASSWORD
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: `"${config.MAIL_FROM_NAME}" <${config.MAIL_FROM_ADDRESS}>`,
                to: to,
                subject: subject,
                html: html
            };
            let response = await transporter.sendMail(mailOptions);
        })
    }
}