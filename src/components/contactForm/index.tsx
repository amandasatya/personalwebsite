import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { logo } from "../../../constants";
import Link from "next/link";
import emailjs from "emailjs-com";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error sending email:", error.message);
          alert("Failed to send email: " + error.message);
        } else {
          console.error("Unexpected error:", error);
          alert("Failed to send email. Please try again later.");
        }
      }
    } else {
      console.error("Form reference is not set.");
      alert("Failed to send email. Form reference is not set.");
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center items-center p-5">
      <div className="w-full max-w-lg">
        <div className="bg-slate-700 p-8 md:p-16 rounded-lg gap-2 flex flex-col">
          <div className="flex justify-center items-center mb-4 gap-2">
            {logo.map((logos, index) => (
              <div className="bg-white p-2 rounded-lg" key={index}>
                <Link href={logos.link}>
                  <img src={logos.icon.src} alt="" className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center text-2xl md:text-3xl font-bold p-5 text-center">
            Get in touch with me!
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="text-black">
            <div className="flex flex-col md:flex-row gap-2 p-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="p-3 rounded-lg w-full md:w-1/2"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="p-3 rounded-lg w-full md:w-1/2"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
              />
            </div>
            <div className="p-3">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="p-3 rounded-lg w-full"
                value={formData.email}
                onChange={handleChange}
                id="email_id"
              />
            </div>
            <div className="p-3">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="p-3 rounded-lg w-full"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="p-3">
              <textarea
                name="message"
                placeholder="Message"
                className="p-3 rounded-lg w-full h-32"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center p-3">
              <button
                type="submit"
                className="flex justify-center items-center p-3 bg-white rounded-lg text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
