require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTestEmail() {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "amandasatya93@gmail.com",
        subject: "Test Email",
        text: "This is a test email",
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendTestEmail();
