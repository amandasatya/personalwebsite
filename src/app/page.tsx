"use client";
import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import WorksPage from "@/components/portofolio";
import bgimage from "../assets/images/bg2.jpg";
import ContactForm from "@/components/contactForm";
import ExperiencesTimeline from "@/components/experience";

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
      <ExperiencesTimeline />
      <WorksPage />
      <ContactForm />
      <div>
        <h1 className="flex justify-center items-center bg-sky-900 p-5">
          2024 © Amanda Satya Nugraha
        </h1>
      </div>
    </div>
  );
}
