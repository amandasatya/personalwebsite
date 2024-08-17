import React from "react";
import Image from "next/image";
import { profileimage } from "@/assets";
import { skills } from "../../../constants";
// import cvAmanda from "../../assets/CV";
const AboutMe = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cvamandasatya.pdf";
    link.download = "CV-amandasatya.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="flex flex-col gap-5" id="about">
      <div className="flex flex-col justify-start items-center text-5xl font-bold gap-2 text-center">
        <h1>Hello, </h1>
        <h1>
          I'm <span className=" text-sky-600">FullStack</span> Developer
        </h1>
        <h2 className="text-xl bg-sky-600 shadow-md shadow-inherit border-4 bgs-gradients p-2 rounded-lg  ">
          Specialized in sprinkling magic onto{" "}
          <span className="inline-block text-gradients ">www.</span>
        </h2>
        <div className="flex flex-wrap h-auto w-auto justify-center items-center gap-4 p-5">
          {skills.map((skill, index) => (
            <img
              // fill={true}
              key={index}
              src={skill.icon.src}
              alt={skill.name}
              className="bg-slate-700 object-cover rounded-lg shadow-inner shadow-slate-900 p-2 inline-block w-16 h-16 md:w-20 md:h-20"
            />
          ))}
        </div>
      </div>
      <div className="xl:flex xl:px-48 pt-10 lg:pt-20 xl:relative  gap-10 lg:gap-3 xl:gap-0 lg:w-full lg:h-full lg:flex lg:px-10">
        <div className="lg:w-1/5 lg:hidden p-5">
          <h1 className="text-4xl font-bold flex justify-start items-center w-full h-full lg:-rotate-90 text-sky-600">
            ABOUT ME
          </h1>
        </div>
        <div className="lg:w-2/5 ">
          <div className="bg-slate-800 lg:rounded-2xl justify-center items-center p-5 xl:p-8 xl:container xl:flex   xl:-bottom-16 2xl:-bottom-40 xl:-right-10 ">
            <div className="flex flex-col justify-center items gap-5">
              <h1 className="text-2xl lg:text-5xl font-bold flex lg:justify-start items-center">
                Amanda Satya
              </h1>
              <div>
                <h1 className="">
                  Greetings! I'm <span className="text-sky-600">Satya</span> a
                  fullstack developer, and an ambitious
                  <span className="text-sky-600">
                    {" "}
                    Front-End Developer
                  </span>{" "}
                  based in
                  <span className="text-red-500 animate-pulse">
                    {" "}
                    Bandung,Indonesia
                  </span>
                  . With a fervent <span className="text-sky-600">
                    passion
                  </span>{" "}
                  for coding and a{" "}
                  <span className="text-sky-600">relentless</span> pursuit of
                  excellence, I'm{" "}
                  <span className="text-sky-600">dedicated</span> to crafting
                  immersive digital experiences that inspire and delight users.
                </h1>
              </div>
              <button
                className="p-3 bg-slate-400 rounded-lg cursor-pointer"
                onClick={handleDownloadCV}
                style={{ zIndex: 99 }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-2/5 h-full lg:w-full lg:h-full hidden lg:flex">
          <img
            // fill={true}
            src={profileimage.src}
            alt=""
            className="lg:rounded-xl object-fill w-full h-full"
          />
        </div>
        <div className="lg:w-1/5 xl:w-1/5 ">
          <h1 className="text-4xl font-bold lg:flex justify-start items-center w-full h-full lg:-rotate-90 text-sky-600 hidden">
            ABOUT ME
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
