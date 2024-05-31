import React, { useState, ChangeEvent, FormEvent } from "react";
import { logo } from "../../../constants";
// import fetchEmails from "../../app/api/send-email";
import Link from "next/link";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("test");
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("ini resp", response);
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.log(error);
    }
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
          <form onSubmit={handleSubmit} className="text-black">
            <div className="flex flex-col md:flex-row gap-2 p-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="p-3 rounded-lg w-full md:w-1/2"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="p-3 rounded-lg w-full md:w-1/2"
                value={formData.lastName}
                onChange={handleChange}
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
