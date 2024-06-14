"use client";
import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import WorksPage from "@/components/portofolio";
import bgimage from "../assets/images/bg2.jpg";
import ContactForm from "@/components/contactForm";

const about = () => {
  <section></section>;
};

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      <Navbar classname="" id="navbar" />
      <AboutMe />
      <WorksPage />
      <ContactForm />
    </div>
  );
}
