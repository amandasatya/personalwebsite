import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdWorkspaces } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const buttonOnclose = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex justify-around items-center text-md p-10 gap-3">
      <div>
        <h1 className="text-xl">Amanda Satya</h1>
      </div>
      <div className="hidden md:flex gap-2">
        <div className="flex gap-1 justify-center items-center hover:text-sky-600 cursor-pointer">
          <FaHome />
          <h1>Home</h1>
        </div>
        <div className="flex gap-1 justify-center items-center hover:text-sky-600 cursor-pointer">
          <IoIosPerson />
          <h1>About</h1>
        </div>
        <div className="flex gap-1 justify-center items-center hover:text-sky-600 cursor-pointer">
          <MdWorkspaces />
          <h1>Portofolio</h1>
        </div>
        <div className="flex gap-1 justify-center items-center hover:text-sky-600 cursor-pointer">
          <BsFillTelephoneForwardFill />
          <h1>Contact</h1>
        </div>
      </div>
      <div className="hidden md:flex">
        <h1 className="p-1 bg-slate-700 rounded-md px-4 cursor-pointer hover:bg-sky-600">
          Let's talk
        </h1>
      </div>
      <div className="md:hidden">
        <button
          className="p-1 bg-slate-700 rounded-md px-4 cursor-pointer hover:bg-white hover:text-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isMenuOpen && (
        <div className="">
          <div className="md:hidden flex flex-col gap-2 absolute top-0 right-0 w-full bg-slate-700  shadow-md p-4">
            <h1>Amanda Satya</h1>
            <div className="flex gap-1 justify-start items-center">
              <FaHome />
              <h1>Home</h1>
            </div>
            <div className="flex gap-1 justify-start items-center">
              <IoIosPerson />
              <h1>About</h1>
            </div>
            <div className="flex gap-1 justify-start items-center">
              <MdWorkspaces />
              <h1>Portofolio</h1>
            </div>
            <div className="flex gap-1 justify-start items-center">
              <BsFillTelephoneForwardFill />
              <h1>Contact</h1>
            </div>
          </div>
          <div className="flex absolute top-1 right-2  ">
            <button
              className=" bg-white text-black p-2 rounded-md w-full"
              onClick={buttonOnclose}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
