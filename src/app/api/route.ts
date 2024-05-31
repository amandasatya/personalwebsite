import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    try {
      console.log("first");
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
        subject: `Contact Form Submission from ${firstName} ${lastName}`,
        text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone Number: ${phoneNumber}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email: " });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
