import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-full items-center justify-around h-full">
        <div className="flex flex-col items-center h-[500px] justify-around">
          <img src={logo} alt="" className="w-72 mt-32" />
          <h1 className="text-5xl w-[400px] RhodiumLibre text-center leading-snug text-white mt-10 stroke">
            Welcome To The WorkHub
          </h1>
        </div>
        <div className="flex flex-col mt-24">
          <button
            onClick={() => navigate("/login")}
            className="LandingBtnStart w-80 h-24 rounded-xl m-5 WorkSans text-2xl text-white hover:bg-cyan-700"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/about")}
            className="LandingBtn w-80 h-24 rounded-xl m-5 WorkSans text-2xl text-white hover:bg-cyan-400"
          >
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="LandingBtn w-80 h-24 rounded-xl m-5 WorkSans text-2xl text-white hover:bg-cyan-400"
          >
            Contact with us
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
