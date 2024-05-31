"use client";
import React from "react";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import WorksPage from "@/components/portofolio";
import bgimage from "../assets/images/bg2.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <AboutMe />
      <WorksPage />
    </div>
  );
}
